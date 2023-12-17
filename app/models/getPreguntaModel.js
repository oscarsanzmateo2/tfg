

const connectaBD = require("../models/userModel")

getPregunta = function(temaID) {
    var auxConnexio = connectaBD.getConnectaBD() //creem una nova connexio
    var query = "SELECT * FROM problema WHERE TemaID = ? ORDER BY RAND() LIMIT 1"
    return new Promise((resolve, reject) => {
        if(auxConnexio) {
            auxConnexio.getConnection(function(err, connection) {
                if(err){
                    console.log("ERROR al connectar amb la base de dades: ", err)
                    reject(err)
                } else {
                    connection.query(query, [temaID], (err, resultat) => {
                        connection.release()
                        if(err) {
                            console.log("ERROR al extreure una pregunta aleatoria: ", err)
                            reject(err)
                        } else {
                            console.log("Pregunta extreta amb exit!");
                            resolve(resultat)
                        }
                    })
                }
            })
        }
    })
  
}

module.exports = getPregunta