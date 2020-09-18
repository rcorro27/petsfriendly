import React, { Component } from 'react'

import Navbar from '../container/navbar-container'
import Footer from '../component/Footer/Footer'
import CarouselContainer from '../container/carousel-container'
import Title from '../component/titre-composant'
import SpanComponent from '../component/span-composant'

class PageAcceuil extends Component {
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
                <Footer />
            </div>

        )
    }
}

export default PageAcceuil
