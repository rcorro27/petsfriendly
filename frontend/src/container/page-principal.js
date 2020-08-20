import React, { Component } from 'react'

import ToolbarComponent from 'component/toolbar-component'
import FormContainer from './form-container'
import RecherchePetsitter from 'container/recherchepetsitter-container'
import ProfilProprietaireBord from 'container/profil-demande-pettsitter'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../container/navbar-container'
import Footer from '../component/Footer/Footer'

class PagePrincipal extends Component {
    render () {
        return (
            <Router>

                <Navbar />
                <Switch>

                    <Route exact path='/search' component={RecherchePetsitter} />
                    <Route path='/' component={FormContainer} />
                    <Route path='/profil' component={ProfilProprietaireBord} />

                </Switch>

                <Footer />

            </Router>

        )
    }
}

export default PagePrincipal
