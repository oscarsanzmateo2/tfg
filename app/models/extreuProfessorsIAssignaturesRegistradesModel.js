///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de model permet a la app extreure els professors i les asignatures del registre d'un 
//alumne en concret.
///////////////////////////////////////////////////////////////////////////////////////////////////////

const connectaBD = require("../models/userModel")

extreuProfessorsIAssignaturesRegistrades = function(idUsuari) {
    var auxConnexio = connectaBD.getConnectaBD()
    var query = `SELECT *
    FROM registralumne JOIN asignatura ON registralumne.AssignaturaID = asignatura.AssignaturaID JOIN usuari ON registralumne.ProfessorID = usuari.UsuariID WHERE registralumne.AlumneID = ${idUsuari}`
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
                        } else {
                            resolve(null)
                        }
                    }
                })
            })
        }
    })
}

module.exports = extreuProfessorsIAssignaturesRegistrades