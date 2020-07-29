import React, { Component } from 'react'

// import ToolbarComponent from 'component/toolbar-component'
// import FormContainer from 'container/form-container'
// import RecherchePetsitter from 'container/recherchepetsitter-container'
class DeveloppementContainer extends Component {
    render () {
        return (
            <div>
                <h1>Page DEVELOPEMENT</h1>
                {/* test push */}
                <div>
                    <button onClick={this.handleOnClickRichard}>Richard</button>
                    <button onClick={this.handleOnClickAhmed}>Ahmed</button>
                    <button onClick={this.handleOnClickYahia}>Yahia</button>
                </div>
            </div>
        )
    }
}

export default DeveloppementContainer
