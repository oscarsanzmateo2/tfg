const generarRespostaAPIChatGPTAlumnes = require("../models/apiAlumneModel")

async function feedbackProblema(req, res) {
    try {
      var {problema, resposta} = req.body
      var respostaChatGPT = await generarRespostaAPIChatGPTAlumnes(problema, resposta)
      return respostaChatGPT
    } catch(error) {
      console.error("Error generar feedback de la resposta al problema amb ChatGPT: ", error)
      res.status(500).json({ error: "Error generar feedback de la resposta al problema amb ChatGPT" })
    }
}

module.exports = feedbackProblema
