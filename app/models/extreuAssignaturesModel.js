///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de model permet a la app extreure totes les assignatures que tinguin un professorID especific
///////////////////////////////////////////////////////////////////////////////////////////////////////

const connectaBD = require("../models/userModel")

extreuAssignatures = function(idUsuari) {
    var auxConnexio = connectaBD.getConnectaBD()
    var query = "SELECT * FROM asignatura WHERE ProfessorID = ?"
    return new Promise((resolve, reject) => {
        if(auxConnexio) {
            auxConnexio.getConnection(function(err, connection){
                if(err){
                    console.log("ERROR al connectar amb la base de dades: ", err)
                    reject(err)
                    
                }
                connection.query(query, [idUsuari], (err, results) => {
                    connection.release()
                    if(err) {
                        console.log("ERROR al extreure les assignatures: ", err)
                        reject(err)
                    } else {
                        if(results) { //sql correcte, pero no hi han assignatures assignades
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

module.exports = extreuAssignatures