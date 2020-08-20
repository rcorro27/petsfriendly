const express = require('express')
const router = express.Router()

//les fonction de callback 
const favorisController = require('../controllers/favorisController')

//route pour requete post d'ajout
router.post('/ajout', favorisController.favorisAjout)

//reccuperation proprietaire
router.get('/recuperation/:id', favorisController.favorisRecuperationByIdUtilisateur)

//modification
router.put('/modification/:id', favorisController.favorisModification)

//supression
router.delete('/supression/:id', favorisController.favorisSuppression)
module.exports = router