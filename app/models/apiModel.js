///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de model permet a la app fer un fetch a la api de openAI i obtenir uns resultats 
//dependent del prompt enviat 
///////////////////////////////////////////////////////////////////////////////////////////////////////
require("dotenv").config()

const {OpenAI} = require("openai")

const openAI = new OpenAI({ key: process.env.OPENAI_API_KEY})
/*
const provaGPT = '1. 5x^2 + 7x - 6 = 0\n' +
'2. -3x^2 - 4x + 1 = 0\n' +
'3. 2x^2 + 1x - 2 = 0\n' +
'4. -6x^2 - 5x + 3 = 0\n' +
'5. 4x^2 + 9x + 2 = 0\n' +
'6. -1x^2 - 3x + 5 = 0\n' +
'7. 3x^2 + 2x - 1 = 0\n' +
'8. -8x^2 - 6x + 4 = 0\n' +
'9. 7x^2 + 8x - 9 = 0\n' +
'10. -2x^2 - 1x + 3 = 0'*/

async function generarRespostaAPIChatGPT() {
  
  const prompt = "Genera 10 ecuaciones de segundo grado con ambas soluciones enteras y sin decimales tal que ax^2+bx+c=0, donde a,b y c sean numeros aleatorios tanto positivos como negativos. Devuelve solo las ecuaciones, sin nada de texto adicional tal que: 1.Ecuacion1 2.Ecuacion2 n.Ecuacionn"
  const respostaGPT = await openAI.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: prompt}],
  })
  console.log(respostaGPT.choices[0].message.content)
  return respostaGPT.choices[0].message.content
  //return provaGPT
}

module.exports = generarRespostaAPIChatGPT
