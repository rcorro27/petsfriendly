import React, { Component } from 'react'

import Navbar from './navbar-container'
import Footer from '../component/Footer/Footer'
// import SliderItems from '../component/sliders/SliderItems'
import Title from '../component/titre-composant'
import SpanComponent from '../component/span-composant'
import CarouselContainer from '../container/carousel-container'
// import InputComponent from '../component/input-component'
import DivBoutons from '../component/div-boutons'

class FormContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            titres: []
        }
    }

    componentWillMount () {
        fetch('titres.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ titres: response })
            })
    }

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

                    {this.state.titres.map((text, index) => <DivBoutons classCss='light' titre={text.titreBtn} key={index} />)}
                </div>

                <Footer />
            </div>

        )
    }
}

export default FormContainer
