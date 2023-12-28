///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de controlador permet a un usuari registrar-se despres d'haber introduit les dades
///////////////////////////////////////////////////////////////////////////////////////////////////////

const registrarUsuari = require("../models/registerModel")

function registrarUsuariController(req, res) {
    const {Nom, Correu, Contrasenya, TipusUsuari} = req.body
    
    registrarUsuari(Nom, Correu, Contrasenya, TipusUsuari)
    .then((data) => {
      res.redirect("/")
    })
}

module.exports = registrarUsuariController