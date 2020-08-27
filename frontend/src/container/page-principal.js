import React, { Component } from 'react'

import AdminContainer from 'container/admin-container.js'
import FormContainer from './form-container'
import RecherchePetsitter from 'container/recherchepetsitter-container'
import Profile from 'container/profil.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../container/navbar-container'
import Footer from '../component/Footer/Footer'
import UpdateProfile from './update-profil'
import ListContrat from '../container/list-contrat'
import ProfilDemandePettSitter from '../container/profil-demande-pettsitter'
import PaymentFormContainer from '../container/payment-form-container'

class PagePrincipal extends Component {
    constructor (props) {
        super(props)
        this.setupBeforeUnloadListener = this.setupBeforeUnloadListener.bind(this)
    }

    setupBeforeUnloadListener () {
        window.addEventListener('beforeunload', (ev) => {
            ev.preventDefault()
            localStorage.removeItem('usertoken')
        })
    };

    componentDidMount () {
        // Activate the event listener
        // this.setupBeforeUnloadListener()
    }

    render () {
        return (
            <Router>

                <Navbar />
                <Switch>

                    <Route exact path='/search' component={RecherchePetsitter} />
                    <Route exact path='/admin' component={AdminContainer} />
                    <Route exact path='/' component={FormContainer} />
                    <Route exact path='/profil' component={Profile} />
                    <Route exact path='/update' component={UpdateProfile} />
                    <Route exact path='/demande' component={ProfilDemandePettSitter} />
                    <Route exact path='/payment' component={PaymentFormContainer} />
                    <Route exact path='/contrats' component={ListContrat} />
                    <Route exact path='/demande' component={ProfilDemandePettSitter} />
                    <Route exact path='/payment' component={PaymentFormContainer} />

                </Switch>

                <Footer />

            </Router>

        )
    }
}

export default PagePrincipal
