///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de model permet a la app registrar un usuari a la BD introduint en aquesta les dades
//que aquest haura introduit
///////////////////////////////////////////////////////////////////////////////////////////////////////

const connectaBD = require("../models/userModel")
const bcrypt = require("bcryptjs"); //el que fare servir per posar-lis hash a les contrasenyes

registrarUsuari = function(nom, email, contrasenya, tipusUsu) {
  var auxConnexio = connectaBD.getConnectaBD() //creem una nova connexio
  const query = "INSERT INTO usuari (NomUsuari, Correu, Contrasenya, TipusUsuari) VALUES (?, ?, ?, ?)"
  return new Promise((resolve, reject) => {
    if(auxConnexio) {
      auxConnexio.getConnection(function(err, connection) {
        if(err){
          console.log("ERROR al connectar amb la base de dades: ", err)
          reject(err)
        }
        bcrypt.hash(contrasenya, 10).then(function(hash) {
          connection.query(query, [nom, email, hash, tipusUsu], (err,resultat) => {
            connection.release()
            if(err) {
              console.log("ERROR al registrar el usuari: ", err)
              reject(err)
            } else {
              console.log("Usuari registrat amb exit!");
              resolve(resultat)
            }
          })
        })
      })
        
        
    }
  })  
}
  
module.exports = registrarUsuari