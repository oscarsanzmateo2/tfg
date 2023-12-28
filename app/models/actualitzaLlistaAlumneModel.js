const connectaBD = require("../models/userModel")

actualitzaLlistaAlumneModel = function(idUsuari, idAssignatura) {
    var auxConnexio = connectaBD.getConnectaBD()
    var query = "INSERT INTO registralumne (AlumneID, AssignaturaID) VALUES (?,?)"
    return new Promise((resolve, reject) => {
        if(auxConnexio) {
            auxConnexio.getConnection(function(err, connection){
                if(err){
                    console.log("ERROR al connectar amb la base de dades: ", err)
                    reject(err) 
                }
                connection.query(query,[idUsuari, idAssignatura],(err, results) => {
                    connection.release()
                    if(err) {
                        console.log("ERROR al actualitzar la llista d'assignatures: ", err)
                        reject(err)
                    } else {
                        resolve(results)
                    }
                })
            })
        }
    })
}

module.exports = actualitzaLlistaAlumneModel