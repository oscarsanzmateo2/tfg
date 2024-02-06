function renderAssignatures() {
    var assignaturesList = document.getElementById("assignaturesList")
    fetch("/api/getAssignatures")
        .then(response => response.json())
        .then(assignatures => {     
            assignaturesList.innerHTML = ""
            if(assignatures.assignatures[0] != null) {
                assignatures.assignatures.forEach(assignatura => {
                    if(assignatura.Descripcio == null || assignatura.Descripcio == "") {
                        assignatura.Descripcio = "No s'ha afegit una descripció"
                    }
                    
                    var li = document.createElement("li")
                    var span = document.createElement("span")
                    span.textContent = `, Descripció: ${assignatura.Descripcio}` 
                    var a = document.createElement("a")
                    a.textContent = `Nom assignatura: ${assignatura.Nom} `
                    a.href = `/veureAssignatura/${assignatura.AssignaturaID}`


                    li.appendChild(a)
                    li.appendChild(span)
                    

                    assignaturesList.appendChild(li)
                })
            } else {
                var li = document.createElement('li')
                var a = document.createElement('a')
                a.textContent = "No hi han assignatures, crea una clicant aquí o al botó de dalt!"
                a.href = "/crearAssingatura"
                li.appendChild(a)
                assignaturesList.appendChild(li)
            }
          
        })
        .catch(error => {
            console.error('Error al obtenir les assignatures: ', error)
        })
}

document.addEventListener('DOMContentLoaded', renderAssignatures)