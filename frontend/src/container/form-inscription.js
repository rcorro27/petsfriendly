import React, { Component } from 'react'

import InputInscription from 'component/input-inscription'
import InputComponent from '../component/input-component'

class FormInscription extends Component {
    render () {
        return (
            <div>
                <h1>Inscrivez-vous a Pets Friendly</h1>
                <form id='form-Inscription'>
                    <div class='radio1'>
                        <InputInscription
                            text='pettesitter'
                            type='checkbox'
                            id='petsitter'
                            name='pettesitter'
                            value='pet'
                        />
                        <InputInscription
                            text='proprietair'
                            type='checkbox'
                            id='proprietair'
                            name='pettesitter'
                            value='pet'
                        />
                    </div>
                    <div class='formulaire '>
                        <InputInscription
                            text='Nom :'
                            type='text'
                            id='nom'
                            name='nom'
                        />
                        <InputInscription
                            text='prenom:'
                            type='text'
                            id='prenom'
                            name='prenom'
                        />
                        <InputInscription
                            text='Age :'
                            type='number'
                            id='age'
                            name='age'
                        />
                        <InputInscription
                            text='Numero de telephone   :'
                            type='passeword'
                            id='pwd'
                            name='pwd'
                        />
                        <InputInscription
                            text='numero du batiment  :'
                            type='number'
                            id='numbtm'
                            name='numero'
                        />
                        <InputInscription
                            text='nom de la rue  :'
                            type='text'
                            id='nonrue'
                            name='nomrue'
                        />
                        <InputInscription
                            text='Ville  :'
                            type='text'
                            id='ville'
                            name='ville'
                        />
                        <InputInscription
                            text='Code postal  :'
                            type='text'
                            id='codePostal'
                            name='codePostal'
                        />
                        <InputInscription
                            text='Pays  :'
                            type='text'
                            id='pays'
                            name='pays'
                        />
                        <InputInscription
                            text='Email  :'
                            type='email'
                            id='email'
                            name='email'
                        />
                        <InputInscription
                            text='Cree le mot de passe   :'
                            type='password'
                            id='pwd'
                            name='password'

                        />
                    </div>
                    <h1>Services</h1>
                    <p> Garder l'animal a votre domicile </p>
                    <InputInscription
                        text='Oui'
                        type='checkbox'
                        id='petsitter'
                        name='pettesitter'
                        value='pet'
                    />
                    <InputInscription
                        text='Non'
                        type='checkbox'
                        id='petsitter'
                        name='pettesitter'
                        value='pet'
                    />
                    <p> Garder l'animal au domicile du proprietaire </p>
                    <InputInscription
                        text='Oui'
                        type='checkbox'
                        id='petsitter'
                        name='pettesitter'
                        value='pet'
                    />
                    <InputInscription
                        text='Non'
                        type='checkbox'
                        id='petsitter'
                        name='pettesitter'
                        value='pet'
                    />
                    <p> Promener l'animal </p>
                    <InputInscription
                        text='Oui'
                        type='checkbox'
                        id='petsitter'
                        name='pettesitter'
                        value='pet'
                    />
                    <InputInscription
                        text='Non'
                        type='checkbox'
                        id='petsitter'
                        name='pettesitter'
                        value='pet'
                    />
                    <p> Visite medial de l'animal </p>
                    <InputInscription
                        text='Oui'
                        type='checkbox'
                        id='petsitter'
                        name='pettesitter'
                        value='pet'
                    />
                    <InputInscription
                        text='Non'
                        type='checkbox'
                        id='petsitter'
                        name='pettesitter'
                        value='pet'
                    />
                    <p> Garde de nuit </p>
                    <InputInscription
                        text='Oui'
                        type='checkbox'
                        id='petsitter'
                        name='pettesitter'
                        value='pet'
                    />
                    <InputInscription
                        text='Non'
                        type='checkbox'
                        id='petsitter'
                        name='pettesitter'
                        value='pet'
                    />
                    <p> combien d'animaux pouvez vous gardez  </p>
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
                    <p> Soins Extrat </p>
                    <InputComponent text='toilettage de Chats ' type='checkbox ' id='petsitter' name='pettesitter' value='pet' />
                    <InputComponent text='toilettage de Chien' type='checkbox' id='petsitter' name='pettesitter' value='pet' />
                    <InputInscription
                        text='Soins pour chiens  '
                        type='checkbox'
                        id='petsitter'
                        name='pettesitter'
                        value='pet'
                    />
                    <InputInscription
                        text='Bignades'
                        type='checkbox'
                        id='petsitter'
                        name='pettesitter'
                        value='pet'
                    />
                    <InputInscription
                        text='Dressage'
                        type='checkbox'
                        id='petsitter'
                        name='pettesitter'
                        value='pet'
                    />
                    <p> Soins Extrat </p>
                    <InputInscription

                        type='submit'
                        id='inscription'
                        value='submit'
                    />
                    <p> Vous avez deja un compte PetsFriendly? </p>
                    <InputInscription

                        type='a'
                        text='se connecter'
                        id='connection'

                    />

                </form>
            </div>
        )
    }
}

export default FormInscription
