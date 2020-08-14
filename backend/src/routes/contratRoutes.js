const express = require('express')
const router = express.Router()

//les fonctions de callback 
const contratCreationController = require('../controllers/contratCreationController')
const contratFinController = require('../controllers/contratFinController')

// route pour creation du contrat et tout ce qui va avec
router.post("/creation", contratCreationController.contratCreation)

// route pour fin du contrat et tout ce qui va avec
router.put("/fin", contratFinController.contratFin)

// route pour recuperer les contrats de l'utilisateur avec son id
router.get("/recuperation/utilisateur/:id", contratCreationController.contratRecuperationByIdUtilisateur)

module.exports = router