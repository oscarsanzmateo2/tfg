function renderAssignatura() {
    var assignaturaID = window.location.pathname.split("/").pop()
    fetch(`/api/getUnaAssignatura/${assignaturaID}`)
        .then(response => response.json())
        .then(data => {   
            var assignatura = data.assignatura[0]
            if(assignatura) {
                var assignaturaList = document.createElement("ul")
                assignaturaList.innerHTML = `
                    <h2> Assignatura:   ${assignatura.Nom}</h2>
                    <li><strong>Assignatura ID:</strong> ${assignatura.AssignaturaID}</li>
                    <li><strong>Professor ID:</strong> ${assignatura.ProfessorID}</li>
                    <li><strong>Descripció:</strong> ${assignatura.Descripcio || "No s'ha afegit una descripció"}</li>
                `
                assignaturaContenidor.appendChild(assignaturaList)
                var assignaturaTema = document.createElement("ul")
                assignaturaTema.innerHTML = ""
                if(data.assignatura[0].NomTema != null) { //si hi ha minim un tema, aquesta condicio la pasa
                    data.assignatura.forEach(element => {
                    var li = document.createElement('li')
                    var a = document.createElement('a')
                    a.textContent = element.NomTema
                    a.href = `/alumnePreguntaAleatoria/${element.TemaID}` 
                    li.appendChild(a)
                    assignaturaTemes.appendChild(li)        
                })
                } else { // si no hi han temes crea un text predefinit
                    var li = document.createElement("li")
                    li.textContent = "No hi han temes per aquesta assignatura!"
                    assignaturaTemes.appendChild(li)
                }                
            }     
        })
        .catch(error => {
            console.error('Error al obtenir la assignatura: ', error)
        })
}


document.addEventListener("DOMContentLoaded", renderAssignatura)