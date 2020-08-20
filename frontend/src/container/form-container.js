import React, { Component } from 'react'

import Footer from '../component/Footer/Footer'
import CarouselContainer from '../container/carousel-container'
import Title from '../component/titre-composant'
import SpanComponent from '../component/span-composant'
import Navbar from '../container/navbar-container'
import DivBoutons from '../component/div-boutons'
import ImageTitreComposant from '../container/image-titre-container'

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

                <div>

                    <main id='divContainer'>
                        <CarouselContainer />

                        <div className='block'>

                            <span
                                className='SpanTitre'
                            >Nous considerons votre Animal Comme un membre De notre Famille
                            </span>
                        </div>

                    </main>

                    <div className='row bg-dark'>

                        {this.state.titres.map((text, index) => <DivBoutons classCss='h-100 p-3 col-lg-4 text-center ' titre={text.titreBtn} key={index} />)}

                    </div>

                    <ImageTitreComposant />

                </div>
            </div>

        )
    }
}

export default FormContainer
