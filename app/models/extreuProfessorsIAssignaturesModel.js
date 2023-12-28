const connectaBD = require("../models/userModel")

extreuProfessorsIAssignatures = function() {
    var auxConnexio = connectaBD.getConnectaBD()
    var query = `SELECT usuari.NomUsuari,usuari.UsuariID, usuari.AlumnesAssignaturesLlista, asignatura.Nom, asignatura.AssignaturaID FROM usuari LEFT JOIN asignatura ON usuari.UsuariID = asignatura.ProfessorID WHERE usuari.TipusUsuari = "Professor"`
    return new Promise((resolve, reject) => {
        if(auxConnexio) {
            auxConnexio.getConnection(function(err, connection){
                if(err){
                    console.log("ERROR al connectar amb la base de dades: ", err)
                    reject(err) 
                }
                connection.query(query,(err, results) => {
                    connection.release()
                    if(err) {
                        console.log("ERROR al extreure la assignatura: ", err)
                        reject(err)
                    } else {
                        if(results && results.length>0) { 
                            resolve(results)
                        } 
                    }
                })
            })
        }
    })
}

module.exports = extreuProfessorsIAssignatures