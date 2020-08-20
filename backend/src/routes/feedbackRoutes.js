const express = require('express')
const router = express.Router()

//les fonction de callback 
const feedbackController = require('../controllers/feedbackController')

//route pour requete post d'ajout
router.post('/ajout',)

//reccuperation proprietaire
router.get('/recuperation/:id',)

//modification
router.put('/modification/:id',)

//supression
router.delete('/supression/:id',)


module.exports = router