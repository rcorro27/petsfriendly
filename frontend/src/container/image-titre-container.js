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
        const composant1 = [{
            classDiv: 'col-lg-4',
            src: 'src/img/image_site/icone/logo-garantie.png',
            classCss: 'rounded-circle',
            titre: 'Titre 1'
        }]
        return (
            <div className='row'>
                <ImageTitre classDiv='col-lg-4' src='src/img/image_site/icone/logo-garantie.png' classCss='rounded-circle' titre='lisez les avis vérifiés et choisissez le gardien parfait' />
                <ImageTitre classDiv='col-lg-4' src='src/img/image_site/icone/star.png' classCss='rounded-circle' titre='réserver et payer en toute securité  via le site web ou l application' />
                <ImageTitre classDiv='col-lg-4' src='src/img/image_site/icone/money-icon-76.png' classCss='rounded-circle' titre='beneficier de la garantie rover d une assistance 24/7 et d une protection de reservation' />
            </div>

        )
    }
}

export default ImageTitreComposant
