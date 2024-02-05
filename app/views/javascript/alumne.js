function renderAssignatures() {
    var assignaturesList = document.getElementById('assignaturesList')
    fetch("/api/getAssignaturesAlumnesRegistrades")
        .then(response => response.json())
        .then(assignatures => {   
            var auxAssig = []
            var auxProf = []
            assignaturesList.innerHTML = ""
            professorList.innerHTML = ""
            if(assignatures != null ) {
                assignatures.forEach(assignatura => {
                    if(!auxAssig.includes(assignatura.AssignaturaID)) {
                        var li = document.createElement("li")
                        var a = document.createElement("a")
                        li.textContent = `Professor: ${assignatura.NomUsuari}, Assignatura: `
                        a.textContent = assignatura.Nom
                        a.href = `/veureAssignaturaAlumne/${assignatura.AssignaturaID}` 
                        li.appendChild(a)
                        assignaturesList.appendChild(li)
                        auxAssig.push(assignatura.AssignaturaID)
                    }
                    if(!auxProf.includes(assignatura.ProfessorID)) {
                        console.log(auxProf)
                        var li = document.createElement("li")
                        li.textContent = `Professor: ${assignatura.NomUsuari}, correu: ${assignatura.Correu}`
                        professorList.appendChild(li)
                        auxProf.push(assignatura.ProfessorID)
                    }                     
                })
            } else {
                var li = document.createElement('li')
                li.textContent = "No hi han assignatures en aquest moment!"
                assignaturesList.appendChild(li)
            } 
          
        })
        .catch(error => {
            console.error('Error al obtenir les assignatures: ', error)
        });
}

document.addEventListener('DOMContentLoaded', renderAssignatures)