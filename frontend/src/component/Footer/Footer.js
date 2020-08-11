import React, { Component } from 'react'
import '../../../src/footer.css'

import ListNetworks from '../../container/list-network-container'

import FooterLinks from '../footer-links'

class Footer extends Component {
    render () {
        const li1 = ['Connexion', 'Mon profil', 'Mes favoris', 'Tableau de bord']
        const li2 = ['A propos de nous', 'Condition d utilisation', 'Confidentialite', 'Nous contacter']
        return (
            <footer className='page-footer font-small stylish-color-dark pt-4'>

                <div className='container text-center text-md-left'>

                    <div className='row'>

                        <div className='col-md-2 mx-auto'>

                            <div class='view overlay z-depth-1-half'>
                                <img src='src/img/logo.png' class='img-fluid' alt='' />
                                <a href=''>
                                    <div class='mask rgba-white-light' />
                                </a>
                            </div>

                        </div>

                        <hr className='clearfix w-100 d-md-none' />

                        <hr className='clearfix w-100 d-md-none' />

                        <FooterLinks divClass='col-md-2 mx-auto' classH='font-weight-bold text-uppercase mt-3 mb-4' classUl='list-unstyled' titre='Vous' li={li1} />

                        <hr className='clearfix w-100 d-md-none' />
                        <FooterLinks divClass='col-md-2 mx-auto' classH='font-weight-bold text-uppercase mt-3 mb-4' classUl='list-unstyled' titre='A propos de Pets Friendly' li={li2} />
                        <div className='col-md-2'>

                            <div className='view overlay z-depth-1-half'>
                                <img src='src/img/icon_reseaux/Paiement_Logo.png' className='img-fluid' alt='' />

                            </div>

                        </div>
                    </div>

                </div>

                <hr />

                <ListNetworks />

                <div className='footer-copyright text-center py-3'>© 2020 Copyright:

                </div>

            </footer>

        )
    }
}

export default Footer
