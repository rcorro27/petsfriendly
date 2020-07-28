import React, { Component } from 'react'
import SliderItems from './SliderItems'
class Slider extends Component {
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
            <section>
                <article>
                    {this.state.images.map((image, index) => <SliderItems imgSrc={image.imgSrc} key={index} />)}
                </article>
            </section>

        )
    }
}

export default Slider
