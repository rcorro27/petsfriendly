import React, { Component } from 'react'

import AdminContainer from 'container/admin-container.js'
import FormContainer from './form-container'
import RecherchePetsitter from 'container/recherchepetsitter-container'
import ProfilProprietaireBord from 'container/profil-demande-pettsitter'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../container/navbar-container'
import Footer from '../component/Footer/Footer'

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
        this.setupBeforeUnloadListener()
    }

    render () {
        return (
            <Router>

                <Navbar />
                <Switch>

                    <Route exact path='/search' component={RecherchePetsitter} />
                    <Route exact path='/admin' component={AdminContainer} />
                    <Route exact path='/' component={FormContainer} />
                    <Route path='/profil' component={ProfilProprietaireBord} />

                </Switch>

                <Footer />

            </Router>

        )
    }
}

export default PagePrincipal
