function renderAssignatura() { 
    fetch(`/api/getAssignaturesAlumnes`)
        .then(response => response.json())
        .then(assignatures => {   
            assignaturesList.innerHTML = ""
            if(assignatures != null) {
                assignatures.forEach(assignatura => {
                    if(assignatura.AssignaturaID != null) {
                        var li = document.createElement("li")
                        var a = document.createElement("a")
                        li.textContent = `Professor: ${assignatura.NomUsuari}, assignatura: `
                        a.textContent = assignatura.Nom
                        a.href = `/afegirAssignaturaAlumne?AssigID=${assignatura.AssignaturaID}&ProfID=${assignatura.UsuariID}` 
                        li.appendChild(a)
                        assignaturesList.appendChild(li)
                    }    
            })
        } else {
            var li = document.createElement('li')
            li.textContent = "No hi han assignatures en aquest moment!"
            assignaturesList.appendChild(li)
          }
          
        })
        .catch(error => {
            console.error('Error al obtenir la assignatura: ', error)
        })
}


document.addEventListener("DOMContentLoaded", renderAssignatura)