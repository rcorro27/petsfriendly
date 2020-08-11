import React, { Component } from 'react'
import SocialMediaIcon from '../component/icon-social-media'

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
            <ul className='list-unstyled list-inline text-center'>

                {this.state.icones.map((icon, index) => <SocialMediaIcon divClass='list-inline-item' classa={icon.classa} classI={icon.classI} key={index} />)}

            </ul>

        )
    }
}

export default ListNetworks
