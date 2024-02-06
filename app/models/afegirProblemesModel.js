///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de model permet a la app emmagatzemar els problemes amb els seus enunciats i solucions 
//a la BD
///////////////////////////////////////////////////////////////////////////////////////////////////////

const connectaBD = require("../models/userModel")

afegirProblemesModel = function(temaID, enunciats, respostes) {
    noEmpty = enunciats.filter(enunciat => enunciat != "") // filtrem els enunciats buits...
    let auxQuery = noEmpty.map((enunciat, index) => [temaID, enunciat, respostes[index]])// i els posem en un format amb el que sql pugui treballar facilment
    
    var auxConnexio = connectaBD.getConnectaBD() //creem una nova connexio
    var query = "INSERT INTO problema (TemaID, Enunciat, RespostaProfessor) VALUES ?"
    return new Promise((resolve, reject) => {
        if(auxConnexio) {
            auxConnexio.getConnection(function(err, connection) {
                if(err){
                    console.log("ERROR al connectar amb la base de dades: ", err)
                    reject(err)
                } else {
                    connection.query(query, [auxQuery], (err, resultat) => {
                        connection.release()
                        if(err) {
                            console.log("ERROR al afegir els problemes: ", err)
                            reject(err)
                        } else {
                            console.log("Problemes afegits a la BD amb exit!");
                            resolve(resultat)
                        }
                    })
                }
            })
        }
    })

}

module.exports = afegirProblemesModel