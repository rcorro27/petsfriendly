import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import '../css/payment.css'
import Modal from 'component/modal'
class PaymentFormContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            service: JSON.parse(localStorage.getItem('serviceRecherche')),
            servicesTotal: JSON.parse(localStorage.getItem('servicestotal')),
            dateDebut: JSON.parse(localStorage.getItem('dateDebut')),
            dateFin: JSON.parse(localStorage.getItem('dateFin')),
            sitter: JSON.parse(localStorage.getItem('sitter')),
            proprietaire: JSON.parse(localStorage.getItem('usertoken')),
            paimentFait: '',
            show: false,
            message: ''
            /* voir pour les paiments et la demande */

        }
        this.handleClick = this.handleClick.bind(this)
        this.showModal = this.showModal.bind(this)
        this.onHandleonClose = this.onHandleonClose.bind(this)
    }

    showModal () {
        this.setState({ show: true })
    };

    onHandleonClose () {
        this.setState({ show: false })
    };

    handleClick () {
        return axios
            .post('https://pets-friendly.herokuapp.com/contrats/creation', {

                utilisateur: {
                    id_proprietaire: this.state.proprietaire.utilisateur.id,
                    id_petsitter: this.state.sitter.id
                },
                contrat: {
                    date_debut: this.state.dateDebut,
                    date_fin: this.state.dateFin
                },
                service: this.state.service,
                promotion: {
                    id_promotion: 1
                }

            })
            .then(response => {
                if (Object.keys(response.data).length === 0) {
                    this.state.message = 'Demande pas envoyee '
                    this.showModal()
                    // alert('Demande Envoyee')
                    this.props.history.push('/')
                } else {
                    this.state.message = 'Demande pas envoye veuillez communiquer avec nous'
                    this.showModal()
                }
            })
            .catch(err => {
                alert('Demande pas envoye veuillez communiquer avec nous')
                console.log('erreur recherche:', err)
            })
    }

    render () {
        console.log(this.state)

        return (
            <div className='row'>
                <Modal onHandleonClose={this.onHandleonClose} show={this.state.show}>{this.state.message}</Modal>
                <div className='col-75'>
                    <div className='containerPayment'>

                        <div className='row'>
                            <div className='col-50'>
                                <h3>Adresse de facturation</h3>
                                <label htmlFor='fname'><i className='fa fa-user' /> Nom et Prenom</label>
                                <input type='text' id='fname' name='firstname' placeholder='John M. Doe' />
                                <label htmlFor='email'><i className='fa fa-envelope' /> Email</label>
                                <input type='text' id='email' name='email' placeholder='john@example.com' />
                                <label htmlFor='adr'><i className='fa fa-address-card-o' /> Addresse</label>
                                <input type='text' id='adr' name='address' placeholder='542 W. 15th Street' />
                                <label htmlFor='city'><i className='fa fa-institution' /> Ville</label>
                                <input type='text' id='city' name='city' placeholder='New York' />

                                <div className='row'>
                                    <div className='col-50'>
                                        <label htmlFor='state'>Province</label>
                                        <input type='text' id='state' name='state' placeholder='NY' />
                                    </div>
                                    <div className='col-50'>
                                        <label htmlFor='zip'>Code-Postal</label>
                                        <input type='text' id='zip' name='zip' placeholder='10001' />
                                    </div>
                                </div>
                            </div>

                            <div className='col-50'>
                                <h3>Payment</h3>
                                <label htmlFor='fname'>Cartes acceptes</label>
                                <div className='icon-container'>
                                    <i className='fab fa-cc-visa' style={{ color: 'navy' }} />
                                    <i className='fab fa-cc-amex' style={{ color: 'blue' }} />
                                    <i className='fab fa-cc-mastercard' style={{ color: 'red' }} />
                                    <i className='fab fa-cc-discover' style={{ color: 'orange' }} />
                                </div>
                                <label htmlFor='cname'>Nom dans la carte</label>
                                <input type='text' id='cname' name='cardname' placeholder='Nom dans la carte' />
                                <label htmlFor='ccnum'>Numero de carte </label>
                                <input type='text' id='ccnum' name='cardnumber' placeholder='1111-2222-3333-4444' />
                                <label htmlFor='expmonth'> Moix Exp</label>
                                <input type='text' id='expmonth' name='expmonth' placeholder='September' />

                                <div className='row'>
                                    <div className='col-50'>
                                        <label htmlFor='expyear'>Annee expiration</label>
                                        <input type='text' id='expyear' name='expyear' placeholder='2018' />
                                    </div>
                                    <div className='col-50'>
                                        <label htmlFor='cvv'>CVV</label>
                                        <input type='text' id='cvv' name='cvv' placeholder='352' />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <input type='button' value='Envoyer demande' className='btnPayment' onClick={this.handleClick} />

                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(PaymentFormContainer)
