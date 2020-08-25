import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import '../css/payment.css'
class PaymentFormContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            service: JSON.parse(localStorage.getItem('serviceRecherche')),
            servicesTotal: JSON.parse(localStorage.getItem('servicestotal')),
            dateDebut: JSON.parse(localStorage.getItem('dateDebut')),
            dateFin: JSON.parse(localStorage.getItem('dateFin')),
            sitter: JSON.parse(localStorage.getItem('sitter')),
            proprietaire: JSON.parse(localStorage.getItem('usertoken'))

        }
    }

    render () {
        return (
            <div className='row'>
                <div className='col-75'>
                    <div className='containerPayment'>
                        <form action='/action_page.php'>

                            <div className='row'>
                                <div className='col-50'>
                                    <h3>Billing Address</h3>
                                    <label htmlFor='fname'><i className='fa fa-user' /> Full Name</label>
                                    <input type='text' id='fname' name='firstname' placeholder='John M. Doe' />
                                    <label htmlFor='email'><i className='fa fa-envelope' /> Email</label>
                                    <input type='text' id='email' name='email' placeholder='john@example.com' />
                                    <label htmlFor='adr'><i className='fa fa-address-card-o' /> Address</label>
                                    <input type='text' id='adr' name='address' placeholder='542 W. 15th Street' />
                                    <label htmlFor='city'><i className='fa fa-institution' /> City</label>
                                    <input type='text' id='city' name='city' placeholder='New York' />

                                    <div className='row'>
                                        <div className='col-50'>
                                            <label htmlFor='state'>State</label>
                                            <input type='text' id='state' name='state' placeholder='NY' />
                                        </div>
                                        <div className='col-50'>
                                            <label htmlFor='zip'>Zip</label>
                                            <input type='text' id='zip' name='zip' placeholder='10001' />
                                        </div>
                                    </div>
                                </div>

                                <div class='col-50'>
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
                            <input type='submit' value='Continue to checkout' className='btnPayment' />
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(PaymentFormContainer)
