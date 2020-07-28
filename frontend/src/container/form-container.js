import React, { Component } from 'react'

import InputComponent from 'component/input-component'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/Footer/Footer'
import Slider from '../component/sliders/Slider'
import Title from '../component/Titles/Title'
import DivSpans from '../component/Buttons/DivSpans'

// import Navbar from '../component/Navbar'

class FormContainer extends Component {
    render () {
        return (

            <div>
                <Navbar />
                <div>

                    <h1>Formulaire usager</h1>
                    <form id='form-test'>
                        <InputComponent
                            text="Nom d'usager:"
                            type='text'
                            id='userName_id'
                            name='userName'
                        />
                    </form>
                </div>
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
