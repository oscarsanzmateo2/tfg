///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de model permet a la app extreure tots els temes que tinguin una assignaturaID especifica,
//aixi com les dades de la assignatura en questio
///////////////////////////////////////////////////////////////////////////////////////////////////////

const connectaBD = require("../models/userModel")

extreuUnaAssignatura = function(idAssignatura) {
    var auxConnexio = connectaBD.getConnectaBD()
    console.log("extreureAssignatura: ", idAssignatura)
    var query = "SELECT asignatura.*, tema.* FROM asignatura INNER JOIN tema ON asignatura.AssignaturaID = tema.AssignaturaID WHERE asignatura.AssignaturaID = ?"
    console.log("query: ", query)
    return new Promise((resolve, reject) => {
        if(auxConnexio) {
            auxConnexio.getConnection(function(err, connection){
                if(err){
                    console.log("ERROR al connectar amb la base de dades: ", err)
                    reject(err)
                    
                }
                connection.query(query, [idAssignatura] ,(err, results) => {
                    connection.release()
                    if(err) {
                        console.log("ERROR al extreure la assignatura: ", err)
                        reject(err)
                    } else {
                        if(results && results.length>0) { 
                            resolve(results)
                        } else { // no ha trobat cap tema, i per tant no hi ha cap data
                            auxConnexio2 = connectaBD.getConnectaBD()
                            if(auxConnexio2) {
                                auxConnexio2.getConnection(function(error,connection2) { //aixi que fem una segona connexio per extreure l'assignatura tal 
                                    if(error){
                                        console.log("ERROR al connectar amb la base de dades: ", err)
                                        reject(error)
                                        
                                    } else {
                                        auxQuery = "SELECT * FROM asignatura WHERE AssignaturaID = ?"
                                        connection2.query(auxQuery, [idAssignatura], (error, results2) => {
                                            connection2.release()
                                            if(error) {
                                                console.log("ERROR al extreure la assignatura: ", err)
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

module.exports = extreuUnaAssignatura