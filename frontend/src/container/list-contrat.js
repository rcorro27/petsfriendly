import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import axios from 'axios'

import { Button } from 'react-bootstrap'

class ListContrat extends Component {
    constructor () {
        super()

        this.state = {

            id: '',

            contrats: []

        }
    }

    componentDidMount () {
        // const token = localStorage.usertoken

        // const decoded = jwtdecode(token)

        this.setState({

            id: JSON.parse(localStorage.getItem('usertoken')).utilisateur.id

        })

        if (localStorage.getItem('usertoken')) {
            axios

                .get(`https://pets-friendly.herokuapp.com/contrats/recuperation/utilisateur/${JSON.parse(localStorage.getItem('usertoken')).utilisateur.id}`, {

                })

                .then(response => {
                    console.log('response', response)

                    this.setState({

                        contrats: response.data

                    })
                })
        } else {
            this.props.history.push('/')
        }
    }

    accepterContrat (contrat) {
        axios
            .post('https://pets-friendly.herokuapp.com/contrats/acceptation', {
                utilisateur: {
                    id_proprietaire: contrat.id_proprietaire,
                    id_petsitter: contrat.id_petsitter

                },
                contrat: {
                    id_contrat: contrat.id_contrat,
                    date_debut: contrat.date_debut,
                    date_fin: contrat.date_fin

                }

            })
            .then(response => {
                console.log('Contrat Acceptee', response)
            })
    }

    render () {
        console.log('response', this.state.id)

        console.log('contrat', this.state.contrats)

        return (

            <div className=''>

                <h1>Hi you</h1>

                <table className='table'>

                    <thead>

                        <tr>

                            <th>id_contrat</th>

                            <th>Proprietaire</th>

                            <th>Petsitter</th>

                            <th>date debut</th>

                            <th>date fin</th>

                            <th>est_accepte</th>

                            <th>est_termine</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            this.state.contrats.map((contrat, index) =>

                                <tr key={index}>

                                    <td>{contrat.id_contrat}</td>

                                    <td>{contrat.nom_proprietaire + ',' + contrat.prenom_proprietaire}</td>

                                    <td>{contrat.nom_petsitter + ',' + contrat.prenom_petsitter}</td>

                                    <td> {contrat.date_debut}

                                    </td>

                                    <td>{contrat.date_fin}</td>

                                    <td>{!contrat.est_accepte ? <Button onClick={e => this.accepterContrat(contrat)}>Accepter</Button> : <Button>Annuler</Button>}</td>

                                    <td>{contrat.est_termine ? 'Terminee ' : 'Pas Encore Terminee'}</td>

                                </tr>

                            )

                        }

                    </tbody>

                </table>

            </div>

        )
    }
}

export default withRouter(ListContrat)
