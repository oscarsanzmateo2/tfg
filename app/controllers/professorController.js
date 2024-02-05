///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de controlador permet controlar les funcions que han de poder realitzar l'usuari professor
//renderPaginaTema envia una solicitud al model per poder extreure totes les assignatures i les dades d'un
//professor en concret 
//renderPaginaAssignatura envia una solicitud al model per poder extreure tots els temes i les dades d'una
//assignatura en concret 
//crearAssingaturaController permet crear una nova instancia de assignatura a la BD amb les dades introduides
//per el usuari professor
///////////////////////////////////////////////////////////////////////////////////////////////////////

const crearAssingatura = require("../models/crearAssignaturaModel")
const extreuAssignatures = require("../models/extreuAssignaturesModel")
const extreuUnaAssignatura = require("../models/extreuUnaAssignaturaModel")

var professorController = {
    renderPaginaProfessor: (req, res) => {
        return extreuAssignatures(req.session.usuari.idUsuari)
        .then((assignatures) => {
            return assignatures || null
        })
    },
    renderPaginaAssignatura: (req,res) => {
        return extreuUnaAssignatura(req.params.idAssignatura)
        .then((assignatura) => {
            return assignatura
        })
    },
    crearAssingaturaController: (req,res) => {
        const {Nom, Descripcio} = req.body
        crearAssingatura(Nom, Descripcio, req.session.usuari.idUsuari)
        .then((data) => {
            res.redirect("/perfil/Professor")
        })
        .catch((error) => {
            console.error("Error crear l'assignatura: ", error)
            res.status(500).send("Error al crear l'assignatura")
            res.redirect("/perfil/Professor")
        })
    }

}




module.exports = professorController