import React, { Component } from 'react'
import Network from './Network'

class ListNetworks extends Component {
    constructor (props) {
        super(props)

        this.state = {
            icones: []
        }
    }

    componentDidMount () {
        fetch('icons.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ images: response })
            })
    }

    render () {
        return (
            <div className='networks'>

                <div className='networks-child'>
                    {this.state.icones.map((icon, index) => <Network imgSrc={icon.imgSrc} key={index} />)}
                </div>
            </div>

        )
    }
}

export default ListNetworks
