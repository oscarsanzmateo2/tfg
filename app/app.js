const express = require('express')
const session = require('express-session')
const app = express()
const userController = require('./controllers/userController')
const path = require('path')
const indexRouter = require('./routes/index')
const professorController = require('./controllers/professorController')
const assignaturaController = require("./controllers/assignaturaController")
const generarNumerosAleatorios = require("./controllers/apiController")
const alumneController = require("./controllers/alumneController")
const feedbackProblema = require("./controllers/apiControllerAlumne")
app.use(session({ secret: 'nosehadeseralgoaleatoriillargambnumero875494', resave: true, saveUninitialized: true }))


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/api/getAssignatures', async (req, res) => {
  try {
    var assignatures = await professorController.renderPaginaProfessor(req, res)
    res.json({ assignatures })
  } catch (error) {
    console.error('Error al obtenir les assignatures: ', error);
    res.status(500).json({ error: 'Error al  obtenir les assignatures' });

  }
  
})

app.get('/api/getUnaAssignatura/:idAssignatura', async (req, res) => {
  try {
    var assignatura = await professorController.renderPaginaAssignatura(req, res)
    res.json({ assignatura })
  } catch (error) {
    console.error('Error al obtenir les assignatures: ', error);
    res.status(500).json({ error: 'Error al  obtenir les assignatures' });

  }
  
})


app.get('/api/getUnTema/:idTema', async (req, res) => {
  try {
    var tema = await assignaturaController.renderPaginaTema(req, res)
    res.json({ tema })
  } catch (error) {
    console.error('Error al obtenir els temes: ', error);
    res.status(500).json({ error: 'Error al  obtenir els temes' });

  }
  
})

let auxAPI = {}

app.post('/api/chatGptApi/:idTema', async (req, res) => {
  try {
    var diccionariRespostes = await generarNumerosAleatorios(req, res)
    auxAPI = diccionariRespostes
    res.redirect(`/veureProblemesGenerats/${req.params.idTema}`)
  } catch (error) {
    console.error('Error en la solicitud POST a /api/chatGptApi:', error);
    res.status(500).json({ error: 'Error en la solicitud POST a /api/chatGptApi' })
  }
})

app.get('/api/getDadesGenerades', (req, res) => {
  let aux2 = {}
  if(auxAPI != {}) {
    aux2 = auxAPI
    auxAPI = null
    res.json(aux2)
  }
})

app.get('/api/getAssignaturesAlumnes', async (req, res) => {
  try {
    
    var assignatura = await alumneController.renderPaginaAlumne(req, res)
    res.json( assignatura )
  } catch (error) {
    console.error('Error al obtenir les assignatures: ', error);
    res.status(500).json({ error: 'Error al  obtenir les assignatures' });

  }
})

app.get("/api/getUnaPregunta/:idTema", async (req, res) => {
  try {
    var pregunta = await alumneController.getPreguntaAleatoria(req, res)
    res.json(pregunta)
  } catch (error) {
    console.error('Error al obtenir la pregunta: ', error);
    res.status(500).json({ error: 'Error al obtenir la pregunta' });
  }
})

app.post("/api/feedbackChatGPTproblema", async (req, res) => {
  try {
    const respotaChatGPT = await feedbackProblema(req, res)
    res.json(respotaChatGPT)
  } catch (error) {
    console.error('Error en la solicitud POST a /api/feedbackChatGPTproblema:', error);
    res.status(500).json({ error: 'Error en la solicitud POST a /api/feedbackChatGPTproblema' })
  }
})

app.use('/', indexRouter)

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
})


