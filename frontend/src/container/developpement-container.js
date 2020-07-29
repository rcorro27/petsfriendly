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
                    <span><button onClick={this.props.handleOnClickRichard}>Richard</button></span>
                    <span><button onClick={this.props.handleOnClickAhmed}>Ahmed</button></span>
                    <span><button onClick={this.props.handleOnClickYahia}>Yahia</button></span>
                </div>
            </div>
        )
    }
}

export default DeveloppementContainer
