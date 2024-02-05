///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de controlador permet rebre el tipus de problema seleccionat per el usuari professor 
//i crida al model de chatGPT per obtenir els valors aleatoris (No funciona).
///////////////////////////////////////////////////////////////////////////////////////////////////////

const { query } = require("express")
const generarRespostaAPIChatGPT = require("../models/apiModel")
const { prompt } = require("readline-sync")



async function generarNumerosAleatorios(req, res) {
  try {
    var arrayRespostes = {}
    var { TipusProblema, ProblemaPersonalitzatInput } = req.body
    let promptAPI = ""
    if(TipusProblema == "EcuacioSegonGrau") {
      promptAPI = "Generate 10 second degree equations with both solutions being integers without decimals with that structure: ax^2+bx+c=0, where a,b and c are both positive and negative random integer numbers. Answer with only the ecuations and the solution, no aditional text following this structure: 1.Equation1 SolutionEquation1 2.Equation2 SolutionEquation2 n.Equationn SolutionEquationn"
    }
    if(TipusProblema == "ProblemaPersonalitzat") {
      promptAPI = "Genera 5 problemas con el siguiente enunciado: " + ProblemaPersonalitzatInput + ". contesta con solo el enunciado y con el siguiente formato: 1.Enunciado1 2.Enunciado2 n.Enunciadon , es muy importante que cada enunciado este en una única linea."
    }
    if(promptAPI != "") {
      var respostaChatGPT = await generarRespostaAPIChatGPT(promptAPI) //cridem al metode per generar la resposta GPT
      var respostaSeparada = respostaChatGPT.split("\n") //com totes les respostes tenen un \n, aixi podem obtenir totes les repostes separades
      var matchEq = []
      var matchSol = []
      respostaSeparada.forEach((linea, indice) => {
        //console.log("linea : ", indice, " es: ", linea)
        var match = linea.match(/(\d+)\. (.+)  Solution: (.+)/ )
        if(!match) { // si el problema es del tipus problema personalitzat entrarà aquí
          var match2 = linea.match(/(\d+)\. (.+)/)
          if(match2) {
            matchEq.push(match2[2].trim())
            //console.log(matchEq)
          }
        } else { // si el problema es tipus problema parametritzat farà aixo
          const ecuacio = match[2].trim()
          const resultat = match[3].trim()
          arrayRespostes[ecuacio] = resultat
        }
        
      })
      if(matchEq != null) { // si es del tipus problema personalitzat caldrà fer una nova conexio amb l'API per aconseguir les respostes
        var newPrompt = ["Da las respuestas a los siguientes problemas: "]
        matchEq.forEach(equation => {
          newPrompt.push(equation)

        })
        newPrompt.push(". Escribe solo las respuestas, sin nada de texto adicional, es decir, que si la respuesta es 10N, solo escribe esto, nada de como has llegado ahi, tambien debes seguir el siguiente formato: 1.Solucion1 2.Solucion2 n.Solucionn")
        newPrompt = newPrompt.join(" ") // ho convertim a string
        var respostaChatGPTSolucio = await generarRespostaAPIChatGPT(newPrompt) // fem la segona crida
        var solucionsSeparades = respostaChatGPTSolucio.split("\n")
        solucionsSeparades.forEach((linea, indice) => {
          var matchSolucio = linea.match(/(\d+)\. (.+)/)
          if(matchSolucio) {
            matchSol.push(matchSolucio[2].trim())
          }
        })
        matchEq.forEach((match, index) => {
          arrayRespostes[match] = matchSol[index]
        })

      }

      return arrayRespostes 
    }

  } catch (error) {
    console.error("Error al generar números aleatorios con ChatGPT: ", error)
    res.status(500).json({ error: "Error al generar números aleatorios con ChatGPT" })
  }
}


module.exports = generarNumerosAleatorios