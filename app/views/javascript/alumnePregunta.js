function renderProblemes() {
    var temaID = window.location.pathname.split("/").pop()
    var formProblemes = document.getElementById('formProblemes');

    fetch(`/api/getUnaPregunta/${temaID}`)
        .then(response => response.json())
        .then(problema => {
            if (problema != [] && problema.length > 0) { 
                var h3 = document.createElement("h3")
                h3.textContent = problema[0].Enunciat
                problemaContenidor.appendChild(h3)

                var inputProblema = document.createElement('input')
                inputProblema.type = 'hidden'
                inputProblema.name = 'respostaProfessor'
                inputProblema.value = problema[0].RespostaProfessor
                formProblemes.appendChild(inputProblema)

                formProblemes.addEventListener("submit", function (event) {
                    event.preventDefault();
                    submitForm();
                });

            } else { 
                var h3 = document.createElement("h3")
                h3.textContent = "No hi han problemes per aquest tema, clica al botó de sota per tornar a la llista de assignatures"
                problemaContenidor.appendChild(h3)

                formProblemes.parentNode.removeChild(formProblemes);

                var button = document.createElement("button")
                button.textContent = "Torna endarere"
                button.addEventListener("click", function () {
                    window.history.back()
                })
                problemaContenidor.appendChild(button)
            }
        })
        .catch(error => {
            console.error('Error al obtenir els problemes generats per IA: ', error)
        });

        function submitForm() {
            var inputProblemaValue = formProblemes.querySelector('input[name="resposta"]').value
            var respostaProfessorInput = formProblemes.querySelector('input[name="respostaProfessor"]').value
        
            if (inputProblemaValue == respostaProfessorInput) {
                var feedbackElement = document.createElement("h1")
                feedbackElement.style.textAlign = "center"
                feedbackElement.style.fontFamily = "Helvetica, Arial, sans-serif"

                feedbackElement.textContent = "La teva resposta és correcta!"
                feedbackElement.style.color = "green"
                document.body.appendChild(feedbackElement)
            } else {
                var feedbackElement = document.createElement("h1")
                feedbackElement.style.textAlign = "center"
                feedbackElement.style.fontFamily = "Helvetica, Arial, sans-serif"

                feedbackElement.textContent = "La teva resposta no és correcta. La resposta es: " + respostaProfessorInput
                feedbackElement.style.color = "red"
                document.body.appendChild(feedbackElement)
            }
        }
}

document.addEventListener("DOMContentLoaded", renderProblemes);