function renderAssignatura() {
    var temaID = window.location.pathname.split("/").pop()
    fetch(`/api/getUnTema/${temaID}`)
        .then(response => response.json())
        .then(data => {   
            //console.log(data)
            var tema = data.tema[0]
            if(tema) {
                var temesList = document.createElement("ul")
                temesList.innerHTML = `
                    <h2> El meu tema: <a href="/veureAssignatura/${tema.AssignaturaID}">  ${tema.NomTema}</a></h1>
                    <li><strong>Tema ID:</strong> ${tema.TemaID}</li>
                    <li><strong>Assignatura ID:</strong> ${tema.AssignaturaID}</li>
                    <li><strong>Descripció:</strong> ${tema.DescripcioTema || "No s'ha afegit una descripció"}</li>
                `
                assignaturaContenidor.appendChild(temesList)
                var assignaturaTema = document.createElement("ul")
                assignaturaTema.innerHTML = ""
                if(data.tema[0].ProblemaID != null) {
                    data.tema.forEach(element => {
                        //console.log(element)
                        if(element.RespostaProfessor == null || element.RespostaProfessor == "") {
                            element.RespostaProfessor = "No s'ha proporcionat una resposta"
                        }
                        var li = document.createElement('li')
                        li.textContent = `Enunciat: ${element.Enunciat}, Resposta professor: ${element.RespostaProfessor}`
                        assignaturaTemes.appendChild(li)        
                })
                } else { // si no hi han temes crea un text predefinit
                    var li = document.createElement("li")
                    var a = document.createElement("a")
                    a.textContent = "No hi han problemes per aquest tema, crea'n un apretant aquí o al botó de dalt!"
                    a.href = `/crearProblemes/${tema.TemaID}` 
                    li.appendChild(a)
                    assignaturaTemes.appendChild(li)
                }   
                
                
                document.querySelector("button").setAttribute("onclick", `window.location.href = "/crearProblemes/${tema.TemaID}"`)
            }
            
            
        })
        .catch(error => {
            console.error('Error al obtenir la assignatura: ', error)
        })
}


document.addEventListener("DOMContentLoaded", renderAssignatura)