import React, { Component } from 'react'
import ListItemComponent from 'component/list-item-component'
import VignetteComponent from 'component/vignette-component'
class ResultatRecherchePetsitter extends Component {
    render () {
        return (
            <div>
                <ListItemComponent text='RECHERCHE' />
                {/* const VignetteComponent = ({ urlPhoto, classname, name, text, codepostal }) */}
                <VignetteComponent urlPhoto='frontend/src/img/caroussel/image1.jpeg' classname='toto' name='test name' text='titre normalement' codePostal='h33h3h3' />
                <button onClick={this.props.onHandleSaveOnClick}>retour recherche</button>

            </div>

        )
    }
}
export default ResultatRecherchePetsitter
