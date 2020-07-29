import '../../footer.css'
import React from 'react'
import ListNetworks from './ListNetworks'
import ImgComposant from '../img-composant'

function Footer () {
    return (
        <div className='footer'>
            <section>

                <div className='footer-header'>

                    <div className='logo-container'>

                        <img id='logoImg' src='src/img/logo.png' alt='logo' width='100px' height='200px' />

                    </div>

                    <div className='link-container'>
                        <div className='link-1'>

                            <a href=''>Mon Compte</a>
                            <a href=''>Connexion</a>

                        </div>

                        <div className='link-2'>

                            <a href=''>A Propos</a>
                            <a href=''>Nous Contacter</a>

                        </div>

                        <div className='link-3'>

                            <ImgComposant srcIMG='src/img/icon_reseaux/Paiement_Logo.png' classBo='' />

                        </div>

                    </div>

                </div>
                <ListNetworks />
            </section>

            <div className='copyright'>
                <p>Copyright© 2020-2021 Best-Shop Inc. Tous droits réservés</p>
            </div>

        </div>

    )
}

export default Footer
