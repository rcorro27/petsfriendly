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
            isFormOpenAhmed: false,
            isFormOpenRichard2: false
        }

        this.handleAddOnClickYahia = this.handleAddOnClickYahia.bind(this)
        this.handleAddOnClickRichard = this.handleAddOnClickRichard.bind(this)
        this.handleAddOnClickRichard2 = this.handleAddOnClickRichard2.bind(this)
        this.handleAddOnClickAhmed = this.handleAddOnClickAhmed.bind(this)
        this.handleSaveOnClickYahia = this.handleSaveOnClickYahia.bind(this)
        this.handleSaveOnClickAhmed = this.handleSaveOnClickAhmed.bind(this)
        this.handleSaveOnClickRichard = this.handleSaveOnClickRichard.bind(this)
        this.handleSaveOnClickRichard2 = this.handleSaveOnClickRichard2.bind(this)
    }

    handleAddOnClickYahia () {
        this.setState({ isFormOpenYahia: true })
    }

    handleAddOnClickRichard () {
        this.setState({ isFormOpenRichard: true })
    }

    handleAddOnClickRichard2 () {
        this.setState({ isFormOpenRichard2: true })
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

    handleSaveOnClickRichard2 () {
        this.setState({ isFormOpenRichard2: false })
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
        const BUTTONSRICHARD2 = [{
            label: 'Richard Demande',
            handleOnClick: this.handleAddOnClickRichard2
        }]

        return (
            <div>
                <h1>Application</h1>
                <ToolbarComponent buttons={BUTTONSYAHIA} />
                <ToolbarComponent buttons={BUTTONSRICHARD} />
                <ToolbarComponent buttons={BUTTONSAHMED} />
                <ToolbarComponent buttons={BUTTONSRICHARD2} />
                <div>
                    {this.state.isFormOpenYahia ? <FormContainer onHandleSaveOnClickYahia={this.handleSaveOnClickYahia} /> : ''}
                    {this.state.isFormOpenAhmed ? <FormFeedBack onHandleSaveOnClickAhmed={this.handleSaveOnClickAhmed} /> : ''}
                    {this.state.isFormOpenRichard ? <RecherchePetsitter onHandleSaveOnClickRichard={this.handleSaveOnClickRichard} /> : ''}
                    {this.state.isFormOpenRichard2 ? <ProfilDemandePettSitter onHandleSaveOnClickRichard={this.handleSaveOnClickRichard} /> : ''}

                </div>
            </div>
        )
    }
}

export default ApplicationContainer
