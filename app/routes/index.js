
const express = require("express")
const router = express.Router()
const registrarUsuariController = require("../controllers/userController")
const path = require("path")
const loginUsuari = require("../controllers/loginController")
const perfilController = require("../controllers/perfilController")
const professorController = require("../controllers/professorController")
const assignaturaController = require("../controllers/assignaturaController")
const problemaController = require("../controllers/problemaController")
const alumneController = require("../controllers/alumneController")


// Ruta GET per la pagina principal
router.get("/",(req, res) => {
  res.sendFile(path.join(__dirname, "../views", "iniciPage.html"))
})

// Ruta GET per la pagina de registre
router.get("/registre",(req, res) => {
  res.sendFile(path.join(__dirname, "../views", "registerPage.html"))
})

// Ruta POST per registrar usuaris
router.post("/registre", registrarUsuariController)

// Ruta GET per la pagina de login
router.get("/login",(req, res) => {
  res.sendFile(path.join(__dirname, "../views", "loginPage.html"))
})

// Ruta POST per registrar logejar usuaris
router.post("/login", loginUsuari)

// Ruta GET per mostrar pagina personalitzada per alumnes y professors
router.get("/perfil/:tipus", (req,res) => {
  if(req.params.tipus == 0) {
    tipusPerfil = perfilController.getPerfil(req,res)
  } else {
    tipusPerfil = req.params.tipus
  }
  if(tipusPerfil){
    res.sendFile(path.join(__dirname, "../views", `perfil${tipusPerfil}.html`))
  } else {
    res.redirect("/login")
  }
})

// Ruta GET per veure la pàgina de crear assignatures.
router.get("/crearAssingatura", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "professorCrearAssignPage.html"))
})

// Ruta POST per crear una assignatura nova.
router.post("/crearAssingatura", professorController.crearAssingaturaController)

// Ruta GET per veure la pàgina de veure una assignatura en concret.
router.get("/veureAssignatura/:idAssingatura",(req,res) => {
  res.sendFile(path.join(__dirname, "../views", "professorVeureAssignPage.html"))
}) 

// Ruta GET per veure la pàgina de crear temes.
router.get("/crearTema/:idAssignatura", (req,res) => {
  res.sendFile(path.join(__dirname, "../views", "professorCrearTemaPage.html"))
})

// Ruta POST per crear un tema nou.
router.post("/crearTema/:idAssignatura", assignaturaController.crearTemaController)

// Ruta GET per veure la pàgina d'un tema en concret.
router.get("/veureTema/:idTema", (req,res) => {
  res.sendFile(path.join(__dirname, "../views", "professorVeureTemaPage.html"))
})

// Ruta GET per veure la pàgina de crear problemes.
router.get("/crearProblemes/:idTema", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "problemesCrear.html"))
})

// Ruta GET per veure la pàgina dels problemes generats.
router.get("/veureProblemesGenerats/:idTema", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "professorVeureProblemesGenerats.html"))
})

// Ruta POST per afegir els problemes generats a la BD.
router.post("/veureProblemesGenerats/:idTema", problemaController.afegirProblemesController)


//Aqui comencen els alumnes...

// Ruta GET per veure la pàgina de afegir asignatures al seu registre.
router.get("/afegirAssignatura", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "alumneAfegirAssignatures.html"))
})

// Ruta GET que actualitza el llistat del alumne i retorna a la seva pàgina principal.
router.get("/afegirAssignaturaAlumne", (req, res) => {
  alumneController.actualitzaLlistaAlumne(req, res)
  res.sendFile(path.join(__dirname, "../views", "perfilAlumne.html"))
})

// Ruta GET per veure la pàgina d'una assignatura en concret.
router.get("/veureAssignaturaAlumne/:idAssignatura", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "alumneVeureAssignatura.html"))
})

// Ruta GET per veure la pàgina de contestar preguntes.
router.get("/alumnePreguntaAleatoria/:idTema", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "alumneVeurePregunta.html"))
})



module.exports = router;