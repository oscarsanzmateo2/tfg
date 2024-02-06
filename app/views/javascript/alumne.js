function renderAssignatures() {
    var assignaturesList = document.getElementById('assignaturesList')
    console.log("here")
    fetch("/api/getAssignaturesAlumnesRegistrades")
        .then(response => response.json())
        .then(assignatures => { 
            console.log(assignatures) 
            var auxAssig = []
            var auxProf = []
            assignaturesList.innerHTML = ""
            professorList.innerHTML = ""
            if(assignatures != null ) {
                console.log("entra aqui")
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
                var h3 = document.createElement("h3")
                var a = document.createElement("a")

                h3.textContent = "No hi han assignatures en aquest moment!"

                a.textContent = "Afegeix-ne apretant aquí o al botò de dalt"
                a.href = "/afegirAssignatura"

                h3.appendChild(a)

                assignaturesList.appendChild(h3)
            } 
          
        })
        .catch(error => {
            console.error('Error al obtenir les assignatures: ', error)
        });
}

document.addEventListener('DOMContentLoaded', renderAssignatures)