import React, { Component } from 'react'

import Navbar from './navbar-container'
import Footer from '../component/Footer/Footer'
// import SliderItems from '../component/sliders/SliderItems'
import Title from '../component/titre-composant'
import SpanComponent from '../component/span-composant'
import CarouselContainer from '../container/carousel-container'
import InputComponent from '../component/input-component'
import DivBoutons from '../component/div-boutons'

class FormContainer extends Component {
    render () {
        return (

            <div>
                <Navbar />
                <div />

                <main id='divContainer'>
                    <CarouselContainer />
                    <Title
                        titre1='titre 1Nous considerons votre Animal'
                        titre2='Comme un membre De notre Famille'
                    />
                    <SpanComponent divClass='test' text='Yahia' />
                </main>
                <div className='block'>
                    <DivBoutons classCss='col-xs-3' param1='Devenir Sitter' param2='En savoir plus' />
                    <DivBoutons classCss='col-xs-3' param1='Rechercher un pet Sitter' param2='En savoir plus' />
                    <DivBoutons classCss='col-xs-3' param1='Tout nos services' param2='En savoir plus' />
                </div>

                <Footer />
            </div>

        )
    }
}

export default FormContainer
