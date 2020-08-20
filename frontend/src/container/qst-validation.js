import React, { Component } from 'react'

import InputComponent from '../component/input-component'

class QuestionValidation extends Component {
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
        return (
            <>

                <div className='modal-body mx-3'>

                    <InputComponent

                        classCss='md-form mb-5'
                        classInput='form-control validate' type='text' id='qst1' name='qst1' placeHolder='Pourquoi choisisev vous cette job?'
                        onchange={this.props.change}
                    />
                    <InputComponent

                        classCss='md-form mb-5'
                        classInput='form-control validate' type='text' id='qst2' name='qst2' placeHolder='AVEZ-VOUS UNE RESPONSABILITÉ CIVILE ??'
                        onchange={this.props.change}
                    />
                    <InputComponent

                        classCss='md-form mb-5'
                        classInput='form-control validate' type='text' id='qst3' name='qst3' placeHolder='Avez vous des animaux?'
                        onchange={this.props.change}
                    />
                    <InputComponent

                        classCss='md-form mb-5'
                        classInput='form-control validate' type='text' id='qst4' name='qst4' placeHolder='Es ce que vous avez des antecedents judiciaire ?'
                        onchange={this.props.change}
                    />
                    <InputComponent

                        classCss='md-form mb-5'
                        classInput='form-control validate' type='text' id='qst5' name='qst5' placeHolder='QUELS TYPES D ACTIVITÉS PROPOSEZ-VOUS ?'
                        onchange={this.props.change}
                    />
                </div>

                <ul className='pager'>

                    <li className='page-item'>
                        <a href='#' onClick={this.props.back}>Previous
                        </a>

                    </li>
                </ul>
            </>
        )
    }
}
export default QuestionValidation
