///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de model permet a la app inserir una assignatura creada per el usuari en la BD
///////////////////////////////////////////////////////////////////////////////////////////////////////

const connectaBD = require("../models/userModel")

crearAssingaturaModel = function(Nom, Descripcio, UsuariID) {
    var auxConnexio = connectaBD.getConnectaBD() //creem una nova connexio
    var query = "INSERT INTO asignatura (Nom, Descripcio, ProfessorID) VALUES (?, ?, ?)"
    return new Promise((resolve, reject) => {
        if(auxConnexio) {
            auxConnexio.getConnection(function(err, connection) {
                if(err){
                    console.log("ERROR al connectar amb la base de dades: ", err)
                    reject(err)
                } else {
                    connection.query(query, [Nom, Descripcio ,UsuariID], (err, resultat) => {
                        connection.release()
                        if(err) {
                            console.log("ERROR al crear l'assignatura: ", err)
                            reject(err)
                        } else {
                            console.log("Assignatura creada amb exit!");
                            resolve(resultat)
                        }
                    })
                }
            })
        }
    })
  
}

module.exports = crearAssingaturaModel