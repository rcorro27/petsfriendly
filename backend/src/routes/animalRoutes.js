const express = require('express')
const router = express.Router()

//les fonction de callback 
const animalController = require('../controllers/animalController')

//route pour requete post d'ajout
router.post('/ajout', animalController.animalAjout)

//route pour requete get de recuperation animal by id
router.get('/recuperation/:id', animalController.AnimalRecuperationByIdAnimal)

//route pour requete recupperer animal by user id
router.get('/recuperation/:id', animalController.AnimalRecuperationByIdUtilisateur)

//route pour modification
router.put('/modification/:id', animalController.animalModification)

//route pour supprimer un animal
router.delete('/supression/:id', animalController.AnimalSuppression)

module.exports = router