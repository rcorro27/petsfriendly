import React, { Component } from 'react'

import Navbar from './navbar-container'
import Footer from '../component/Footer/Footer'
// import SliderItems from '../component/sliders/SliderItems'
import Title from '../component/titre-composant'
import SpanComponent from '../component/span-composant'
import CarouselContainer from '../container/carousel-container'
import InputComponent from '../component/input-component'
// import Navbar from '../component/Navbar'

class FormContainer extends Component {
    render () {
        return (

            <div>
                <Navbar />
                <div />
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
                    <Title
                        titre1='titre 1Nous considerons votre Animal'
                        titre2='Comme un membre De notre Famille'
                    />
                    <SpanComponent divClass='test' text='Yahia' />
                    <button onClick={this.props.onHandleSaveOnClick}>retour a la page</button>
                </main>
                <Footer />
            </div>

        )
    }
}

export default FormContainer
