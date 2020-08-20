const express = require('express')
const router = express.Router()

//les fonction de callback 
const PhotoController = require('../controllers/photoController')

//route pour requete post d'ajout
router.post('/profile/ajout/utilisateur/:id', PhotoController.photoProfileAjout)

//route pour requete post d'ajout
router.post('/animal/ajout/utilisateur/:id', PhotoController.photoProfileAjout)

//reccuperation photo
router.get('/profile/recuperation/:url', PhotoController.photoProfileRecuperation)

//reccuperation photo
router.get('/animal/recuperation/:url', PhotoController.photoProfileRecuperation)

module.exports = router