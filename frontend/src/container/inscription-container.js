import React, { Component } from 'react'

import InputComponent from '../component/input-component'

class InscriptionContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            inputs: []
        }
    }

    componentDidMount () {
        fetch('inputs.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ inputs: response })
            })
    }

    render () {
        return (
            <form id='boutton-inscription '>
                <div className='modal-body mx-3'>

                    {this.state.inputs.map((input, index) => <InputComponent classCss={input.classCss} classIcon={input.classIcon} classInput={input.classInput} type={input.type} id={input.id} name={input.name} min={input.min} onchange={this.props.change} textLabel={input.textLabel} key={index} />)}
                </div>
            </form>

        )
    }
}
export default InscriptionContainer
