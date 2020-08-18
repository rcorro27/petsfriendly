const express = require('express')
const router = express.Router()

//les fonctions de callback 
const rechercheController = require('../controllers/rechercheController')

// route pour faire une recherche de petsitters
router.post('/', rechercheController.recherchePetsitters)


module.exports = router