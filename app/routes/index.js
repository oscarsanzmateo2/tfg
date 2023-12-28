
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
router.get("/perfil", (req,res) => {
  tipusPerfil = perfilController.getPerfil(req,res)
  if(tipusPerfil){
    res.sendFile(path.join(__dirname, "../views", `perfil${tipusPerfil}.html`))
  } else {
    res.redirect("/login")
  }
})


router.get("/crearAssingatura", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "professorCrearAssignPage.html"))
})

router.post("/crearAssingatura", professorController.crearAssingaturaController)

router.get("/veureAssignatura/:idAssingatura",(req,res) => {
  res.sendFile(path.join(__dirname, "../views", "professorVeureAssignPage.html"))
}) 

router.get("/crearTema/:idAssignatura", (req,res) => {
  res.sendFile(path.join(__dirname, "../views", "professorCrearTemaPage.html"))
})

router.post("/crearTema/:idAssignatura", assignaturaController.crearTemaController)

router.get("/veureTema/:idTema", (req,res) => {
  res.sendFile(path.join(__dirname, "../views", "professorVeureTemaPage.html"))
})

router.get("/crearProblemes/:idTema", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "problemesCrear.html"))
})

router.get("/veureProblemesGenerats/:idTema", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "professorVeureProblemesGenerats.html"))
})

router.post("/veureProblemesGenerats/:idTema", problemaController.afegirProblemesController)

//Aqui comencen els alumnes...

router.get("/afegirAssignatura", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "alumneAfegirAssignatures.html"))
})

router.get("/afegirAssignaturaAlumne", (req, res) => {
  alumneController.actualitzaLlistaAlumne(req, res)
  res.sendFile(path.join(__dirname, "../views", "perfilAlumne.html"))
})

router.get("/veureAssignaturaAlumne/:idAssignatura", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "alumneVeureAssignatura.html"))
})

router.get("/alumnePreguntaAleatoria/:idTema", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "alumneVeurePregunta.html"))
})

module.exports = router;