import React, { Component } from 'react'

import ToolbarComponent from 'component/toolbar-component'
import FormContainer from 'container/form-container'
// import RecherchePetsitter from 'container/recherchepetsitter-container'
import ProfilDemandePettSitter from 'container/profil-demande-pettsitter'
/* import FormInscription from 'container/form-inscription' */
/* import ProfilProprietaireBord from 'container/profil-proprietair-containaire' */
import FormFeedBack from './feed_back'
import RecherchePetsitter from './recherchepetsitter-container'
class ApplicationContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isFormOpenYahia: false,
            isFormOpenRichard: false,
            isFormOpenAhmed: false
        }

        this.handleAddOnClickYahia = this.handleAddOnClickYahia.bind(this)
        this.handleAddOnClickRichard = this.handleAddOnClickRichard.bind(this)
        this.handleAddOnClickAhmed = this.handleAddOnClickAhmed.bind(this)
        this.handleSaveOnClickYahia = this.handleSaveOnClickYahia.bind(this)
        this.handleSaveOnClickAhmed = this.handleSaveOnClickAhmed.bind(this)
        this.handleSaveOnClickRichard = this.handleSaveOnClickRichard.bind(this)
    }

    handleAddOnClickYahia () {
        this.setState({ isFormOpenYahia: true })
    }

    handleAddOnClickRichard () {
        this.setState({ isFormOpenRichard: true })
    }

    handleAddOnClickAhmed () {
        this.setState({ isFormOpenAhmed: true })
    }

    handleSaveOnClickYahia () {
        this.setState({ isFormOpenYahia: false })
    }

    handleSaveOnClickAhmed () {
        this.setState({ isFormOpenAhmed: false })
    }

    handleSaveOnClickRichard () {
        this.setState({ isFormOpenRichard: false })
    }

    render () {
        const BUTTONSYAHIA = [{
            label: 'Yahia',
            handleOnClick: this.handleAddOnClickYahia
        }]
        const BUTTONSRICHARD = [{
            label: 'Richard',
            handleOnClick: this.handleAddOnClickRichard
        }]
        const BUTTONSAHMED = [{
            label: 'Ahmed',
            handleOnClick: this.handleAddOnClickAhmed
        }]

        return (
            <div>
                <h1>Application</h1>
                <ToolbarComponent buttons={BUTTONSYAHIA} />
                <ToolbarComponent buttons={BUTTONSRICHARD} />
                <ToolbarComponent buttons={BUTTONSAHMED} />
                <div>
                    {this.state.isFormOpenYahia ? <FormContainer onHandleSaveOnClickYahia={this.handleSaveOnClickYahia} /> : ''}
                    {this.state.isFormOpenAhmed ? <FormFeedBack onHandleSaveOnClickAhmed={this.handleSaveOnClickAhmed} /> : ''}
                    {this.state.isFormOpenRichard ? <RecherchePetsitter onHandleSaveOnClickRichard={this.handleSaveOnClickRichard} /> : ''}

                </div>
            </div>
        )
    }
}

export default ApplicationContainer
