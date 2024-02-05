function renderAssignatura() {
    var assignaturaID = window.location.pathname.split("/").pop()
    fetch(`/api/getUnaAssignatura/${assignaturaID}`)
        .then(response => response.json())
        .then(data => {   
            var assignatura = data.assignatura[0]
            if(assignatura) {
                var assignaturaList = document.createElement("ul")
                assignaturaList.innerHTML = `
                    <h1> La meva assignatura: <a href="/perfil/Professor"> ${assignatura.Nom}</a></h1>
                    <li><strong>Assignatura ID:</strong> ${assignatura.AssignaturaID}</li>
                    <li><strong>Professor ID:</strong> ${assignatura.ProfessorID}</li>
                    <li><strong>Descripció:</strong> ${assignatura.Descripcio || "No s'ha afegit una descripció"}</li>
                `
                assignaturaContenidor.appendChild(assignaturaList)
                var assignaturaTema = document.createElement("ul")
                assignaturaTema.innerHTML = ""
                if(data.assignatura[0].NomTema != null) { //si hi ha minim un tema, aquesta condicio la pasa
                    /*data.assignatura.forEach(element => {
                    var li = document.createElement('li')
                    var a = document.createElement('a')
                    a.textContent = element.NomTema
                    a.href = `/veureTema/${element.TemaID}` 
                    li.appendChild(a)
                    assignaturaTemes.appendChild(li) */
                    data.assignatura.forEach(element => {
                        if(element.DescripcioTema == null || element.DescripcioTema == "") {
                            element.DescripcioTema = "No s'ha afegit una descripció per aquest tema"
                        }
                        var li = document.createElement("li")
                        var span = document.createElement("span")
                        span.textContent = `, Descripció: ${element.DescripcioTema}` 
                        var a = document.createElement("a")
                        a.textContent = `Nom tema: ${element.NomTema} `
                        a.href = `/veureTema/${element.TemaID}`
                        li.appendChild(a)
                        li.appendChild(span)
                        assignaturaTemes.appendChild(li)
                    });
                    
                } else { // si no hi han temes crea un text predefinit
                    var li = document.createElement("li")
                    var a = document.createElement("a")
                    a.textContent = "No hi han temes per aquesta assignatura, crea'n un apretant aquí o al botó de dalt!"
                    a.href = `/crearTema/${assignatura.AssignaturaID}`
                    li.appendChild(a)
                    assignaturaTemes.appendChild(li)
                }                
                document.querySelector("button").setAttribute("onclick", `window.location.href = "/crearTema/${assignatura.AssignaturaID}"`)
            }     
        })
        .catch(error => {
            console.error('Error al obtenir la assignatura: ', error)
        })
}


document.addEventListener("DOMContentLoaded", renderAssignatura)