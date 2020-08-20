import React, { Component } from 'react'

import Footer from '../component/Footer/Footer'
import CarouselContainer from '../container/carousel-container'
import Title from '../component/titre-composant'
import SpanComponent from '../component/span-composant'
import Navbar from '../container/navbar-container'
import DivBoutons from '../component/div-boutons'
import ImageTitreComposant from '../container/image-titre-container'
import InputComponent from '../component/input-component'

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
                    <div className='infolettreDiv mt-3'>
                        <h1 className='h1'>Laisse nous vous prevenir des nouveautes</h1>
                        <h6 className='h6'>Reste informe</h6>
                        <form>
                            <InputComponent classCss='form-group' classInput='form-control' textLabel='Entrez votre email' type='email' id='infolettre' name='infolettre' onChange={this.handleChange} />
                            <InputComponent classInput='btn btn-outline-danger' type='submit' id='infolettreButton' name='Envoyer ' value='Envoyer' />
                        </form>
                    </div>

                </div>
            </div>

        )
    }
}

export default FormContainer
