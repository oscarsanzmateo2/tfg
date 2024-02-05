function renderProblemes() {
    var temaID = window.location.pathname.split("/").pop()
    fetch("/api/getDadesGenerades")
        .then(response => response.json())
        .then(problemes => {   
            console.log("esta es la data: ", problemes)
            var form = document.getElementById("formProblemes")
            form.innerHTML = ""

            for(const [key,value] of Object.entries(problemes)) {
                var inputContenidor = (function() {
                    var div = document.createElement("div")
                    div.className = "div-problemes"

                    var inputProblema = document.createElement("input")
                    inputProblema.type = "text"
                    inputProblema.name = "problemes[]"
                    inputProblema.value = key
                    inputProblema.readOnly = "readonly"

                    var inputResposta = document.createElement("input")
                    inputResposta.type = "text"
                    inputResposta.name = "respostes[]"
                    inputResposta.value = value



                    var botoEliminar = document.createElement("button")
                    botoEliminar.type = "button"
                    botoEliminar.textContent = "Descarta"
                    botoEliminar.addEventListener("click", function() {
                        form.removeChild(div)
                    })

                    div.appendChild(inputProblema)
                    div.appendChild(inputResposta)
                    div.appendChild(botoEliminar)

                    return div;
                })()

                form.appendChild(inputContenidor)
            }
            var submitButton = document.createElement("button")
            submitButton.className = "boto-css"
            submitButton.type = "submit"
            submitButton.textContent = "Afegeix els problemes!"
            form.appendChild(submitButton);

            console.log(problemes)
            document.getElementById("formProblemes").action = `/veureProblemesGenerats/${temaID}`  
        })
        .catch(error => {
            console.error('Error al obtenir els problemes generats per IA: ', error)
        })
}
document.addEventListener("DOMContentLoaded", renderProblemes)