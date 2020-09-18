import React, { Component } from 'react'

import InputComponent from '../component/input-component'
import { Link } from 'react-router-dom'

class InscriptionAdressContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            inputs: []
        }
    }

    continue (e) {
        e.preventDefault()
        this.props.nextStep()
    }

    back (e) {
        e.preventDefault()
        this.props.prevStep()
    }

    componentDidMount () {
        fetch('adress.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ inputs: response })
            })
    }

    render () {
        const { handleback, handlenext } = this.props
        // const
        return (
            <>

                <div className='modal-body mx-3'>

                    {this.state.inputs.map((input, index) => <InputComponent classCss={input.classCss} classIcon={input.classIcon} classInput={input.classInput} type={input.type} id={input.id} name={input.name} min={input.min} onchange={this.props.change} textLabel={input.textLabel} key={index} />)}
                </div>

                <ul className='pagination'>
                    <li className='page-item'>
                        <Link to='#' onClick={handleback}>Previous
                        </Link>

                    </li>
                    <li className='page-item'>
                        <Link to='#' onClick={handlenext}>Next
                        </Link>
                    </li>
                </ul>

            </>

        )
    }
}
export default InscriptionAdressContainer
