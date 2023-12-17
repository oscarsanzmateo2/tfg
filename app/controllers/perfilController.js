///////////////////////////////////////////////////////////////////////////////////////////////////////
//Funcio de controlador que permet retornar el tipus d'usuari de la sessio anteriorment creada a loginController
///////////////////////////////////////////////////////////////////////////////////////////////////////
var perfilController = {
    getPerfil: (req, res) => {
        if(req.session){
            return req.session.usuari.tipus
        } else {
            return null
        }
    }
}

module.exports = perfilController
