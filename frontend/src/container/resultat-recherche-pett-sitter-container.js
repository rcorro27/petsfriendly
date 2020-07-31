import React, { Component } from 'react'
import ListItemComponent from 'component/list-item-component'
class ResultatRecherchePetsitter extends Component {
    render () {
        return (
            <div>
                <ListItemComponent text='RECHERCHE' />
                <button onClick={this.props.onHandleSaveOnClick}>retour recherche</button>

            </div>

        )
    }
}
export default ResultatRecherchePetsitter
