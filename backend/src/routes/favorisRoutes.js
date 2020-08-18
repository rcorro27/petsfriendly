const express = require('express')
const router = express.Router()

//les fonction de callback 
const favorisController = require('../controllers/favorisController')

//route pour requete post d'ajout
router.post('/creation', animalController.animalAjout)

router.post('')

module.exports = router