const extreuProfessorsIAssignatures = require("../models/extreuProfessorsIAssignaturesModel")
const getPregunta = require("../models/getPreguntaModel")

var alumneController = {
    renderPaginaAlumne: (req, res) => {
        return extreuProfessorsIAssignatures() 
        .then((assignatures) => {
            return assignatures || null
        })
     
    },
    getPreguntaAleatoria: (req, res) => {
        return getPregunta(req.params.idTema)
        .then((pregunta)=> {
            console.log(pregunta)
            return pregunta
        })
    }
}

module.exports = alumneController