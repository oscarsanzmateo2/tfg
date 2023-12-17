///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de controlador permet rebre el tipus de problema seleccionat per el usuari professor 
//i crida al model de chatGPT per obtenir els valors aleatoris (No funciona).
///////////////////////////////////////////////////////////////////////////////////////////////////////

const generarRespostaAPIChatGPT = require("../models/apiModel")



async function generarNumerosAleatorios(req, res) {
  try {
    var arrayRespostes = []
    var { TipusProblema } = req.body
    var respostaChatGPT = await generarRespostaAPIChatGPT() //cridem al metode per generar la resposta GPT
    var respostaSeparada = respostaChatGPT.split("\n") //com totes les respostes tenen un \n, aixi podem obtenir totes les repostes separades
    respostaSeparada.forEach((linea, indice) => {
      const match = linea.match(/(\d+)\. (.+)/)
      if (match) {
        arrayRespostes.push(match[2])
      }
    })

    return arrayRespostes 
  } catch (error) {
    console.error("Error al generar números aleatorios con ChatGPT: ", error)
    res.status(500).json({ error: "Error al generar números aleatorios con ChatGPT" })
  }
}


module.exports = generarNumerosAleatorios