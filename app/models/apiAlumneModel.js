///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de model permitia a la app fer un fetch a la API de openAI i obtenir les respostes a un 
//enunciat. Actualment esta depracat i sense ús.
///////////////////////////////////////////////////////////////////////////////////////////////////////

require("dotenv").config()

const {OpenAI} = require("openai")

const openAI = new OpenAI({ key: process.env.OPENAI_API_KEY})

async function generarRespostaAPIChatGPTAlumnes(problema, resposta) {
  
    const prompt = `Sobre el problema matematico: ${problema}, es su solucion: ${resposta}? Si es correcto, contesta con: Si, es correcte. En cambio, si no es asi, contesta con: No, no es correcto, la solucion es: la verdadera solucion al problema`
    const respostaGPT = await openAI.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: prompt}],
    })
    console.log(respostaGPT.choices[0].message.content)
    return respostaGPT.choices[0].message.content
}

module.exports = generarRespostaAPIChatGPTAlumnes