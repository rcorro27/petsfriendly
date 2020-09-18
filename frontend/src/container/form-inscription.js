import React, { Component } from 'react'

import InputComponent from 'component/input-component'
import Boutton from 'component/bouton-component'

class FormInscription extends Component {
    render () {
        return (
            <div>
                <h1>Inscrivez-vous à Pets Friendly</h1>
                <form id='form-Inscription'>
                    <div class='radio1'>
                        <InputComponent text='pettesitter' type='checkbox' id='petsitter' name='pettesitter' value='pet' />
                        <InputComponent text='proprietair' type='checkbox' id='proprietair' name='pettesitter' value='pet' />
                    </div>
                    <div class='formulaire '>
                        <InputComponent text='Nom :' type='text' id='nom' name='nom' />

                        <InputComponent text='prenom:' type='text' id='prenom' name='prenom' />

                        <InputComponent text='Age :' type='number' id='age' name='age' />

                        <InputComponent text='Numero de telephone   :' type='passeword' id='pwd' name='pwd' />

                        <InputComponent text='numero du batiment  :' type='number' id='numbtm' name='numero' />

                        <InputComponent text='nom de la rue  :' type='text' id='nonrue' name='nomrue' />

                        <InputComponent text='Ville  :' type='text' id='ville' name='ville' />

                        <InputComponent text='Code postal  :' type='text' id='codePostal' name='codePostal' />

                        <InputComponent text='Pays  :' type='text' id='pays' name='pays' />

                        <InputComponent text='Email  :' type='email' id='email' name='email' />

                        <InputComponent text='Cree le mot de passe   :' type='password' id='pwd' name='password' />

                    </div>
                    <h1>Services</h1>
                    <p> Garder l'animal à votre domicile </p>
                    <InputComponent text='Oui' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <InputComponent text='Non' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <p> Garder l'animal au domicile du propriétaire </p>
                    <InputComponent text='Oui' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <InputComponent text='Non' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <p> Promener l'animal </p>
                    <InputComponent text='Oui' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <InputComponent text='Non' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <p> Visite médicale de l'animal </p>
                    <InputComponent text='Oui' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <InputComponent text='Non' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <p> Garde de nuit </p>
                    <InputComponent text='Oui' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <InputComponent text='Non' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <p> Combien d'animaux pouvez-vous gardez  </p>
                    <select>

                        type='select'
                        id='nbaminaux'
                        name='nbranimaux '
                        option value='1'

                    </select>
                    <p> Autre animaux </p>
                    <select>

                        type='select'
                        id='nbaminaux'
                        name='nbranimaux '
                        option value='1'

                    </select>
                    <p> Soins en extra </p>

                    <InputComponent text='toilettage de Chiens' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <InputComponent text='Soins pour chiens' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <InputComponent text='Bignades' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <InputComponent text='Dressage' type='checkbox' id='petsitter' name='pettesitter' value='pet' />

                    <p> Soins en extra </p>
                    <Boutton type='submit' id='envoi' name='envoi' value='envoyer' />

                    <p> Vous avez déjà un compte PetsFriendly? </p>
                    <ahrefComponent type='a' text='se connecter' />

                </form>
                <button onClick={this.props.onHandleSaveOnClickAhmed}>retour à la page</button>
            </div>
        )
    }
}

export default FormInscription
