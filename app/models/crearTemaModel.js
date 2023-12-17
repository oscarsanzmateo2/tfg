///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de model permet a la app inserir el tema creat per el usuari en la BD
///////////////////////////////////////////////////////////////////////////////////////////////////////

const connectaBD = require("../models/userModel")

crearTemaModel = function(Nom, Descripcio, AssignaturaID) {
    var auxConnexio = connectaBD.getConnectaBD() //creem una nova connexio
    var query = "INSERT INTO tema (NomTema, DescripcioTema, AssignaturaID) VALUES (?, ?, ?)"
    return new Promise((resolve, reject) => {
        if(auxConnexio) {
            auxConnexio.getConnection(function(err, connection) {
                if(err){
                    console.log("ERROR al connectar amb la base de dades: ", err)
                    reject(err)
                } else {
                    connection.query(query, [Nom, Descripcio ,AssignaturaID], (err, resultat) => {
                        connection.release()
                        if(err) {
                            console.log("ERROR al crear el tema: ", err)
                            reject(err)
                        } else {
                            console.log("Tema creat amb exit!");
                            resolve(resultat)
                        }
                    })
                }
            })
        }
    })
  
}

module.exports = crearTemaModel