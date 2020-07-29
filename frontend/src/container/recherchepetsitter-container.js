import React, { Component } from 'react'

import InputComponent from 'component/input-component'
import BoutonComponent from 'component/bouton-component'
import SelectComponent from 'component/select-component'
const TYPEANIMAL = [{
    label: 'Chien',
    value: '1'
}, {
    label: 'Chat',
    value: '2'
}, {
    label: 'Souris',
    value: '3'
}, {
    label: 'Crocodile',
    value: '4'
}]
const RACEANIMAL = [{
    label: 'Doberman',
    value: '1'
}, {
    label: 'TEST',
    value: '2'
}, {
    label: 'TEST',
    value: '3'
}, {
    label: 'TEST',
    value: '4'
}]

class RecherchePetsitter extends Component {
    render () {
        // voir les dates dans le formulaire a chaque fois il y a des erreus dans la console qui pointe le fait de ne pas avoir la bonne valeur date.now??
        return (

            <div>
                <h1>Recherche Petsitter</h1>
                <form id='form-test'>
                    <BoutonComponent type='button' id='toto' name='Garder Chez le PettSitter' value='1' />
                    <BoutonComponent type='button' id='toto' name='Garder chez vous' value='2' />
                    <BoutonComponent type='button' id='toto' name='Promenade' value='3' />
                    <BoutonComponent type='button' id='toto' name='visite chez le veteninaire' value='4' />
                    {/* Separation de boutons , debut des inputs texts */}
                    <InputComponent text='Date de debut' type='date' id='dateDebut' name='date de debut' value='toto' />
                    <InputComponent text='Date de fin' type='date' id='dateFin' name='date de fin' value='toto' />
                    {/* MINIMUN A AJOUTER A NUMERO ERREUR DE CHIFRES NEGATIF ligne 21 */}
                    <InputComponent text='Numero' type='number' id='nro' name='numero' value='toto' />
                    <InputComponent text='Nom de la rue' type='text' id='nomRue' name='nom de la rue' value='toto' />
                    <InputComponent text='Code postal' type='text' id='codePostal' name='Code postal ' value='toto' />
                    {/* Checkbox selection animal ??? demander si ca ne devrait pas etre un select ??? */}
                    <SelectComponent text='Type de animal:' id='typeAnimal_id' name='Type animal' options={TYPEANIMAL} />
                    <h2>Taille de l'animal</h2>
                    <BoutonComponent type='button' id='toto' name='Petit (0-15 kg)' value='1' />
                    <BoutonComponent type='button' id='toto' name='Moyen (16-40 kg)' value='2' />
                    <BoutonComponent type='button' id='toto' name='Grand (41-100 kg)' value='3' />
                    {/* DEMANDER A NASSIM PAR RAPPORT A LA RACE */}
                    <SelectComponent text='Race :' id='typeAnimal_id' name='Type animal' options={RACEANIMAL} />
                    <InputComponent type='submit' id='rechercher' name='Rechercher ' value='rechercher' />
                </form>
            </div>
        )
    }
}

export default RecherchePetsitter
