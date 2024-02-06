///////////////////////////////////////////////////////////////////////////////////////////////////////
//Funcions de controlador que tenen relació amb el usuari alumne
//renderPaginaAlumne: extreu les dades necessaries de la BD per poder renderitzar la pagina dels alumnes.
//getPreguntaAleatoria: extreu una pregunta aleatoriament de la BD.
//actualitzaLlistaAlumne: actualitza el llistat d'assignatures dels alumnes.
//renderPaginaAlumneRegistrades: extreu el llistat de d'un alumne en concret
///////////////////////////////////////////////////////////////////////////////////////////////////////


const extreuProfessorsIAssignatures = require("../models/extreuProfessorsIAssignaturesModel")
const getPregunta = require("../models/getPreguntaModel")
const actualitzaLlistaAlumneModel = require("../models/actualitzaLlistaAlumneModel")
const extreuProfessorsIAssignaturesRegistrades = require("../models/extreuProfessorsIAssignaturesRegistradesModel")

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
            return pregunta
        })
    },
    actualitzaLlistaAlumne: (req, res) => {
        return actualitzaLlistaAlumneModel(req.session.usuari.idUsuari, req.query.AssigID, req.query.ProfID)
        .then((data) => {
            return data
        })
    },
    renderPaginaAlumneRegistrades: (req, res) => {
        return extreuProfessorsIAssignaturesRegistrades(req.session.usuari.idUsuari)
        .then((data) => {
            return data || null
        }) 
    }
}

module.exports = alumneController