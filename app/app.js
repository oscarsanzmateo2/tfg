const express = require("express")
const session = require("express-session")
const userController = require("./controllers/userController")
const path = require("path")
const indexRouter = require("./routes/index")
const professorController = require("./controllers/professorController")
const assignaturaController = require("./controllers/assignaturaController")
const generarNumerosAleatorios = require("./controllers/apiController")
const alumneController = require("./controllers/alumneController")
const feedbackProblema = require("./controllers/apiControllerAlumne")

const app = express()


app.use(session({ secret: "nosehadeseralgoaleatoriillargambnumero875494", resave: true, saveUninitialized: true }))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "views")))



//Ruta API pròpia aplicació per obtenir les assignatures d'un professor en concret i poder renderitzar la seva pàgina.
app.get("/api/getAssignatures", async (req, res) => {
  try {
    var assignatures = await professorController.renderPaginaProfessor(req, res)
    res.json({ assignatures })
  } catch (error) {
    console.error("Error al obtenir les assignatures: ", error)
    res.status(500).json({ error: "Error al  obtenir les assignatures" })

  }
  
})

//Ruta API pròpia aplicació per obtenir les dades d'una assignatura en concret i poder renderitzar la seva pàgina.
app.get("/api/getUnaAssignatura/:idAssignatura", async (req, res) => {
  try {
    var assignatura = await professorController.renderPaginaAssignatura(req, res)
    res.json({ assignatura })
  } catch (error) {
    console.error("Error al obtenir les assignatures: ", error)
    res.status(500).json({ error: "Error al  obtenir les assignatures" })

  }
  
})

//Ruta API pròpia aplicació per obtenir els temes d'una assignatura en concret i poder renderitzar la seva pàgina.
app.get("/api/getUnTema/:idTema", async (req, res) => {
  try {
    var tema = await assignaturaController.renderPaginaTema(req, res)
    res.json({ tema })
  } catch (error) {
    console.error("Error al obtenir els temes: ", error)
    res.status(500).json({ error: "Error al  obtenir els temes" })

  }
  
})

let auxAPI = {}

//Ruta API pròpia aplicació per comunicació amb l'API. Aquí es reben les repostes i es guarden en auxAPI.
app.post("/api/chatGptApi/:idTema", async (req, res) => {
  try {
    var diccionariRespostes = await generarNumerosAleatorios(req, res)
    auxAPI = diccionariRespostes
    res.redirect(`/veureProblemesGenerats/${req.params.idTema}`)
  } catch (error) {
    console.error("Error en la solicitud POST a /api/chatGptApi:", error)
    res.status(500).json({ error: "Error en la solicitud POST a /api/chatGptApi" })
  }
})

//Ruta API pròpia aplicació per recuperar les dades en auxAPI i poder mostrar per pantalla les dades generades per la IA.
app.get("/api/getDadesGenerades", (req, res) => {
  let aux2 = {}
  if(auxAPI != {}) {
    aux2 = auxAPI
    auxAPI = null
    res.json(aux2)
  }
})

//Ruta API pròpia aplicació per obtenir totes les assignatures de la BD i poder renderitzar la pàgina de registrar assignatures.
app.get("/api/getAssignaturesAlumnes", async (req, res) => {
  try {   
    var assignatura = await alumneController.renderPaginaAlumne(req, res)
    res.json( assignatura )
  } catch (error) {
    console.error("Error al obtenir les assignatures: ", error);
    res.status(500).json({ error: "Error al  obtenir les assignatures" })

  }
})

//Ruta API pròpia aplicació per obtenir les dades d'un usuari en concret i poder renderitzar la seva pàgina.
app.get("/api/getAssignaturesAlumnesRegistrades", async (req, res) => {
  try {
    var assignatura = await alumneController.renderPaginaAlumneRegistrades(req, res)
    res.json( assignatura )
  } catch (error) {
    console.error("Error al obtenir les assignatures: ", error);
    res.status(500).json({ error: "Error al  obtenir les assignatures" })

  }
})


//Ruta API pròpia aplicació per obtenir una pregunta aleatoria d'un tema en concret.
app.get("/api/getUnaPregunta/:idTema", async (req, res) => {
  try {
    var pregunta = await alumneController.getPreguntaAleatoria(req, res)
    res.json(pregunta)
  } catch (error) {
    console.error("Error al obtenir la pregunta: ", error)
    res.status(500).json({ error: "Error al obtenir la pregunta" })
  }
})


//Ruta API deprecada al no tenir el usuari alumne interacció amb la API.
app.post("/api/feedbackChatGPTproblema", async (req, res) => {
  try {
    const respotaChatGPT = await feedbackProblema(req, res)
    res.json(respotaChatGPT)
  } catch (error) {
    console.error("Error en la solicitud POST a /api/feedbackChatGPTproblema:", error)
    res.status(500).json({ error: "Error en la solicitud POST a /api/feedbackChatGPTproblema" })
  }
})

app.use("/", indexRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log("Servidor escuchando en el puerto 3000")
})


