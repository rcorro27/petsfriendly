import React, { Component } from 'react'
import ImgComposant from '../component/img-composant'
import { Carousel } from 'react-bootstrap'

class CarouselContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            images: []
        }
    }

    componentDidMount () {
        fetch('images.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ images: response })
            })
    }

    render () {
        return (
            <Carousel>

                {this.state.images.map((image, index) => <Carousel.Item key={index}> <ImgComposant srcIMG={image.imgSrc} classBo='d-block w-100' /></Carousel.Item>)}

            </Carousel>

        )
    }
}

export default CarouselContainer
