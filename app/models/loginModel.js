///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de model permet a la app logejar al usuari al comprovar si existeix el correu introduit
//en la BD, i comprovant la contrasenya es correcte mirant el hash amb bcrypt
///////////////////////////////////////////////////////////////////////////////////////////////////////

const connectaBD = require("../models/userModel")
const bcrypt = require("bcrypt")

loginUsuari = function(email, contrasenya) {
    var auxConnexio = connectaBD.getConnectaBD() //creem una nova connexio
    const query = "SELECT Contrasenya, TipusUsuari, UsuariID, AlumnesAssignaturesLlista FROM usuari WHERE Correu = ?"
    return new Promise((resolve,reject) => {
        if(auxConnexio) {
            auxConnexio.getConnection(function(err, connection){
                if(err){
                    console.log("ERROR al connectar amb la base de dades: ", err)
                    reject(err)
                }
                connection.query(query, [email], (error, results) => {
                    connection.release()
                    if(error || (results[0] == null)) {
                        console.log("ERROR al iniciar amb el usuari: ", error)
                        resolve(null)
                      } else {
                        if(results[0]) {
                            var auxContra = results[0].Contrasenya
                            if(auxContra != null) {
                                bcrypt.compare(contrasenya, auxContra, function(err, result) {
                                    if(err){
                                        console.log("ERROR al comparar contrasenyes: ", err)
                                        reject(err)
                                    } else {
                                        if(result) { //la contrasenya es la correcte
                                            resolve(results)
                                        } else {
                                            console.log("ERROR contrasenya incorrecta")
                                            resolve(null)
                                        }
                                    }
                                    
                                })
                            } else {
                                console.log("ERROR, usuari no existeix")
                                resolve(null)
                            }
                            
                        } else { //sql correcte, pero no hi han resultats, per lo que el usuari no existeix
                            console.log("ERROR usuari no existeix")
                            resolve(null)
                        }
                        
                      }
                })
            })
            
        }
    })
}


module.exports = loginUsuari