///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de controlador permet a un usuari logejar-se, despres de completar la funcio, si es
//correcte, es crea la sessio d'usuari.
///////////////////////////////////////////////////////////////////////////////////////////////////////


const loginUsuari = require("../models/loginModel")

function logUsuariController(req, res) {
    const {Correu, Contrasenya} = req.body
    loginUsuari(Correu, Contrasenya)
    .then((data) => {
        if(data) { // si la contrasenya es correcte
            req.session.usuari = {
                idUsuari: data[0].UsuariID,
                correu: Correu,
                tipus: data[0].TipusUsuari,
                llistaAssignatures: data[0].AlumnesAssignaturesLlista
            }
            res.redirect("/perfil/0")
        } else {
            res.redirect("/login")
        }
    })
    

}

module.exports = logUsuariController


