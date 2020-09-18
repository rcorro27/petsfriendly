import React, { Component } from 'react'

import InputComponent from '../component/input-component'
import { Link } from 'react-router-dom'

class InscriptionContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            inputs: []
        }
        this.continue = this.continue.bind(this)
    }

    continue (e) {
        e.preventDefault()
        this.props.nextStep()
    }

    componentDidMount () {
        fetch('inputs.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ inputs: response })
            })
    }

    render () {
        const { handlenext } = this.props
        return (
            <>

                <div className='modal-body mx-3'>

                    {
                        this.state.inputs.map((input, index) =>
                            <InputComponent
                                classCss={input.classCss} onChangeRadio={this.props.onChangeRadio} classIcon={input.classIcon} classInput={input.classInput}
                                type={input.type} id={input.id}
                                name={input.name} min={input.min} onchange={this.props.change}
                                value={input.value} textLabel={input.textLabel}
                                key={index}
                            />)
                    }
                </div>

                <ul className='pager'>

                    <li className='next'>
                        <Link to='#' onClick={handlenext}>Next
                        </Link>
                    </li>
                </ul>
            </>
        )
    }
}
export default InscriptionContainer
