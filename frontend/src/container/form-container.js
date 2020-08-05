import React, { Component } from 'react'

import Footer from '../component/Footer/Footer'
import CarouselContainer from '../container/carousel-container'
import Title from '../component/titre-composant'
import SpanComponent from '../component/span-composant'
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

                <div>

                    <main id='divContainer'>
                        <CarouselContainer />
                        <Title titre1='titre 1 ' titre2='titre 2 ' />
                        <SpanComponent divClass='test' text='test ' />
                    </main>
                    <div className='block'>

                        {this.state.titres.map((text, index) => <DivBoutons classCss='light' titre={text.titreBtn} key={index} />)}
                    </div>

                    <Footer />
                </div>
                <button onClick={this.props.onHandleSaveOnClickYahia}>retour a page</button>
            </div>

        )
    }
}

export default FormContainer
