import React, { Component } from 'react'

import Footer from '../component/Footer/Footer'
import Slider from '../component/sliders/Slider'
import Title from '../component/Titles/Title'
import DivSpans from '../component/Buttons/DivSpans'
import InputComponent from '../component/input-component'
// import Navbar from '../component/Navbar'

class FormContainer extends Component {
    render () {
        return (

            <div>
                <Navbar />
                <div>
                <InputComponent
                    text='Nom :'
                    type='text'
                    id='nom'
                    name='nom'
                />
                <InputComponent
                    text='Nom :'
                    type='text'
                    id='nom'
                    name='nom'
                />
                        />
                    </form>
                    <button onClick={this.props.onHandleSaveOnClick}>retour a la page</button>
                <main id='divContainer'>
                    <Slider />
                    <Title titre1='titre 1 ' titre2='titre 2 ' />
                    <DivSpans divClass='test' />
                </main>
                <Footer />
            </div>

        )
    }
}

export default FormContainer
