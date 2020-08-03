import React, { Component } from 'react'
import InputComponent from 'component/input-component'
import Boutton from 'component/bouton-component'
import ImageUploader from 'react-images-upload'
class ProfilProprietaireBord extends Component {
    constructor (props) {
        super(props)
        this.state = { pictures: [] }
        this.onDrop = this.handleOnDrop.bind(this)
    }

    render () {
        return (
            <div>
                <div class='imageProfil' />

                handleOnDrop(picture) {
                    this.setState({
                        pictures: this.state.pictures.concat()
                    })
                }

                <ImageUploader
                    withIcon
                    buttonText='Choose images'

                    imgExtension={['.jpg', '.gif', '.png', '.gif']}

                />

                <div>
                    <h1>Mes Information </h1>

                    <form id='profilPettSitter'>
                        <div class='formulaire'>
                            <InputComponent text='Nom' type='text' id='nom' name='nomps' />

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
                        <div>
                            <h1>Mes contract</h1>
                        </div>
                        <p>PettSitter...</p>
                        <div class='date-contact'>
                            <InputComponent text='date debut' type='date' id='date_debut' name='dateD' />
                            <InputComponent text='date fin' type='date' id='date_debut' name='datef' />
                        </div>

                        <div class='ajout-animal'>
                            <Boutton type='submit' id='ajout' name='envoi' value='ajouter' />

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProfilProprietaireBord
