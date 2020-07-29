import React, { Component } from 'react'
import ImgComposant from '../component/img-composant'

class ListNetworks extends Component {
    constructor (props) {
        super(props)

        this.state = {
            icones: []
        }
    }

    componentDidMount () {
        fetch('icones.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ icones: response })
            })
    }

    render () {
        return (
            <div className='networks'>

                <div className='networks-child'>
                    {this.state.icones.map((icon, index) => <ImgComposant srcIMG={icon.imgSrc} key={index} />)}
                </div>
            </div>

        )
    }
}

export default ListNetworks
