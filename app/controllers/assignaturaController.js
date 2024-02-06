///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de controlador permet controlar les funcions que han de poder realitzar les assignatures
//CrearTemaController envia una solicitud al model per crear una nova instancia a la BD de la taula tema 
//amb les dades introduïdes per el usuari professor
//renderPaginaTema envia una solicitud al model per poder extreure tots els problemes i les dades de una
//assignatura en concret 
///////////////////////////////////////////////////////////////////////////////////////////////////////

const crearTema = require("../models/crearTemaModel")
const extreuProblemes = require("../models/extreuProblemesModel")

var assignaturaController = {
    crearTemaController: (req,res) => {
        const {Nom, Descripcio} = req.body
        crearTema(Nom, Descripcio, req.params.idAssignatura)
        .then((data) => {
            res.redirect(`/veureAssignatura/${req.params.idAssignatura}`)
        })
        .catch((error) => {
            console.error("Error crear l'assignatura: ", error)
            res.status(500).send("Error al crear l'assignatura")
            res.redirect("/perfil/Professor")
        })
    },
    renderPaginaTema: (req, res) => {
        return extreuProblemes(req.params.idTema)
        .then((temes) => {
            return temes
        })
    },

}

module.exports = assignaturaController