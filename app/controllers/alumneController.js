const extreuProfessorsIAssignatures = require("../models/extreuProfessorsIAssignaturesModel")
const getPregunta = require("../models/getPreguntaModel")
const actualitzaLlistaAlumneModel = require("../models/actualitzaLlistaAlumneModel")

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
    },
    actualitzaLlistaAlumne: (req, res) => {
        return actualitzaLlistaAlumneModel(req.session.usuari.idUsuari, req.query.AssigID)
        .then((data) => {
            return data
        })
    }
}

module.exports = alumneController