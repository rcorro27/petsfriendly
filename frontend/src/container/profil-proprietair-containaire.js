import React, { Component } from 'react'
import InputComponent from 'component/input-component'
import Boutton from 'component/bouton-component'

class ProfilProprietaireBord extends Component {
    constructor (props) {
        super()
        this.state = { nom: '', prenom: '' }
        this.handleronchange = this.handleronchange.bind(this)
    }

    handelOnClick (e) {
        this.setState({ [e.target.nom]: e.target.value })
        console.log('inseret')
    }

    handleronchange (e) {
        this.setState({ [e.target.nom]: e.target.value })
        this.setState({ [e.target.prenom]: e.target.value })
    }

    /** evenement a revoir j'arivve pas recuperer les champs  */
    render () {
        return (
            <div>
                <div class='imageProfil' />

                <div>
                    <h1>Mes Information </h1>

                    <form id='profilPettSitter'>
                        <div class='formulaire'>
                            <InputComponent text='Nom' type='text' id='nom' name='nomps' handleronchange={this.onchange} />

                            <InputComponent text='prenom:' type='text' id='prenom' name='prenom' handleronchange={this.onchange} />

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
                            <Boutton type='submit' id='ajout' name='envoi' value='ajouter' handelOnClick={this.onclick} />

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProfilProprietaireBord
