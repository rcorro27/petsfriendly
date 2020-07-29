import React, { Component } from 'react'

import Footer from '../component/Footer/Footer'
import CarouselContainer from '../container/carousel-container'
import Title from '../component/titre-composant'
import SpanComponent from '../component/span-composant'
import InputComponent from '../component/input-component'
import Navbar from '../container/navbar-container'

class FormContainer extends Component {
    render () {
        return (

            <div>

                <div>
                    <Navbar />
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

                    <main id='divContainer'>
                        <CarouselContainer />
                        <Title titre1='titre 1 ' titre2='titre 2 ' />
                        <SpanComponent divClass='test' text='test ' />
                    </main>
                    <Footer />
                </div>
                <button onClick={this.props.onHandleSaveOnClickYahia}>retour a page</button>
            </div>

        )
    }
}

export default FormContainer
