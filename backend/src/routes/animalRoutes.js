const express = require('express')
const router = express.Router()

//les fonction de callback 
const animalController = require('../controllers/animalController')

//route pour requete post d'ajout
router.post('/connexion', animalController.animalAjout)

//route pour requete get de recuperation animal by id
router.get('/recuperation/:id', animalController.AnimalRecuperationByIdAnimal)

//route pour requete recupperer animal by user id

router.get('')

//route pour modification

router.put('/modification/:id', animalController.animalModification)

module.exports = router