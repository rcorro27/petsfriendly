import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import '../css/contratsAffichage.css'

class AfficherContratsContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            idUtilisateur: JSON.parse(localStorage.getItem('usertoken')).utilisateur.id,
            reponseContrats: false
        }
        this.onHandleChargerContrats = this.onHandleChargerContrats.bind(this)
    }

    onHandleChargerContrats () {
        if (this.state.reponseContrats === false) {
            return axios
                .get('https://pets-friendly.herokuapp.com/contrats/recuperation/utilisateur/' + this.state.idUtilisateur)
                .then(response => {
                    console.log(response.data)
                })
                .catch(err => {
                    console.log('erreur recherche:', err)
                })
        }
    }

    render () {
        console.log(this.state.idUtilisateur)
        console.log(this.state.reponseContrats.length)
        return (
            <div>
                {this.state.reponseContrats ? <h1>Pas Des Contrats</h1> : this.onHandleChargerContrats()}
                <h1>Demandes de Services</h1>

            </div>)
    }
}
export default withRouter(AfficherContratsContainer)
