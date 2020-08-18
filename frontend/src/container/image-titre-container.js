import React, { Component } from 'react'
import ImageTitre from '../component/image-titre'

class ImageTitreComposant extends Component {
    constructor (props) {
        super(props)

        this.state = {
            images: []
        }
    }

    render () {
        return (
            <div className='row mb-3'>
                <ImageTitre classDiv='col-lg-4' src='src/img/image_site/icone/logo-garantie.png' classCss='rounded-circle mx-auto d-block' titre='lisez les avis vérifiés et choisissez le gardien parfait' />
                <ImageTitre classDiv='col-lg-4' src='src/img/image_site/icone/money-icon-76.png' classCss='rounded-circle mx-auto d-block' titre='réserver et payer en toute securité  via le site web ou l application' />
                <ImageTitre classDiv='col-lg-4' src='src/img/image_site/icone/avis.png' classCss='rounded-circle mx-auto d-block ' titre='beneficier de la garantie rover d une assistance 24/7 et d une protection de reservation' />
            </div>

        )
    }
}

export default ImageTitreComposant
