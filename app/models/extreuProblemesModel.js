///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de model permet a la app extreure tots els problemes que tinguin un temaID especific,
//aixi com les dades del tema en questio
///////////////////////////////////////////////////////////////////////////////////////////////////////

const connectaBD = require("./userModel")

extreuProblemes = function(idTema) {
    var auxConnexio = connectaBD.getConnectaBD()
    var query = "SELECT tema.*, problema.* FROM tema INNER JOIN problema ON tema.TemaID = problema.TemaID WHERE tema.TemaID = ?"
    
    return new Promise((resolve, reject) => {
        if(auxConnexio) {
            auxConnexio.getConnection(function(err, connection){
                if(err){
                    console.log("ERROR al connectar amb la base de dades: ", err)
                    reject(err)
                    
                }
                connection.query(query, [idTema], (err, results) => {
                    connection.release()
                    if(err) {
                        console.log("ERROR al extreure les assignatures: ", err)
                        reject(err)
                    } else {
                        console.log("Problema extreure: ",results)
                        if(results && results.length>0) { //sql correcte, pero no hi han problemes assignats
                            resolve(results)
                        } else { // no ha trobat cap problema, i per tant no hi ha cap data
                            auxConnexio2 = connectaBD.getConnectaBD()
                            if(auxConnexio2) {
                                auxConnexio2.getConnection(function(error,connection2) { //aixi que fem una segona connexio per extreure l'assignatura tal cual
                                    if(err){
                                        console.log("ERROR al connectar amb la base de dades: ", err)
                                        reject(err)
                                        
                                    } else {
                                        auxQuery = "SELECT * FROM tema WHERE TemaID = ?"
                                        connection2.query(auxQuery, [idTema], (error, results2) => {
                                            connection2.release()
                                            if(error) {
                                                console.log("ERROR al extreure el tema: ", err)
                                                reject(err)
                                            } else {
                                                if(results2) {
                                                    resolve(results2)
                                                } else {
                                                    reject(null)
                                                }
                                            }
                                        })
                                    }
                                })
                            }
                        }
                    }
                })
            })
        }
    })
}

module.exports = extreuProblemes