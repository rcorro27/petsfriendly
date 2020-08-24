const express = require('express')
const router = express.Router()

//les fonction de callback 
const PhotoController = require('../controllers/photoController')

//route pour requete post pour ajouter une photo a l'utilisateur
router.post('/profile/ajout/utilisateur/:id', PhotoController.photoProfileAjout)

//route pour requete post pour ajouter une photo d'animal a l'utilisateur
router.post('/animal/ajout/utilisateur/:id', PhotoController.photoAnimalAjout)

//route pour requete post pour modifier la photo de l'animal de l'utilisateur
router.post('/animal/modification/:id', PhotoController.photoAnimalAjout)

module.exports = router