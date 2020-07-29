import React, { Component } from 'react'

// import ToolbarComponent from 'component/toolbar-component'
import FormContainer from 'container/form-container'
// import RecherchePetsitter from 'container/recherchepetsitter-container'
import DeveloppementContainer from './developpement-container'
class ApplicationContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            pageYahia: false,
            pageAhmed: false,
            pageRichard: false

        }

        this.handleAddOnClickYahia = this.handleAddOnClickYahia.bind(this)
        this.handleAddOnClickAhmed = this.handleAddOnClickAhmed.bind(this)
        this.handleAddOnClickRichard = this.handleAddOnClickRichard.bind(this)
        this.handleSaveOnClick = this.handleSaveOnClick.bind(this)
    }

    handleAddOnClickYahia () {
        this.setState({ pageYahia: true })
    }

    handleAddOnClickAhmed () {
        this.setState({ pageRichard: true })
    }

    handleAddOnClickRichard () {
        this.setState({ pageAhmed: true })
    }

    handleSaveOnClick () {
        this.setState({ isFormOpen: false })
    }

    render () {
        return (
            <div>
                {/* <h1>Page</h1> */}
                {/* <ToolbarComponent buttons={BUTTONS} /> */}
                <div>
                    {this.state.pageYahia ? <FormContainer onHandleSaveOnClick={this.handleSaveOnClick} /> : <DeveloppementContainer />}
                </div>
            </div>
        )
    }
}

export default ApplicationContainer
