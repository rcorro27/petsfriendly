const bd = require('../servers/bd')
const {Service} = require('../models/service')

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route suppression de service
function photoProfileAjout(req, res)
{

    res.set({'Content-Type': 'image/png'});
    
}

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route suppression de service
function photoAnimalAjout(req, res)
{

    res.set({'Content-Type': 'image/png'});
    
}

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route suppression de service
function photoProfileRecuperation(req, res)
{

    res.set({'Content-Type': 'image/jpg'});
    res.sendF

}

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route suppression de service
function photoAnimalRecuperation(req, res)
{

    res.set({'Content-Type': 'image/jpg'});
    res.sendF

}



module.exports = {
    photoProfileAjout,
    photoAnimalAjout,
    photoProfileRecuperation,
    photoAnimalRecuperation
}