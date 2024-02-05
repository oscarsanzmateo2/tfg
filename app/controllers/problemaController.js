const afegirProblemesModel = require("../models/afegirProblemesModel")

var problemaController = {
    afegirProblemesController: (req, res) => {
        const {problemes, respostes} = req.body
        afegirProblemesModel(req.params.idTema, problemes, respostes)
        .then((data) => {
            res.redirect(`/veureTema/${req.params.idTema}`)
        })
        .catch((error) => {
            console.error("Error al afegir les assignatures: ", error)
            res.status(500).send("Error al afegir les assignatures")
            res.redirect(`/veureTema/${req.params.idTema}`)
        })
        
    }
}

module.exports = problemaController