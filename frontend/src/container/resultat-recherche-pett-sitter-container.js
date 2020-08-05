import React, { Component } from 'react'
import ListItemComponent from 'component/list-item-component'
import VignetteComponent from 'component/vignette-component'
// import ahrefComponent from 'component/ahref-component'
class ResultatRecherchePetsitter extends Component {
    constructor (props) {
        super(props)

        this.state = {
            resultatRecherche: false,
            resultat: ''
        }
    }

    componentDidMount () {
        fetch('resultat-recherche.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                const arrayTest = []
                console.log(response)
                response.resultatRecherche.map((info, index) => arrayTest.push(info))
                console.log('array apres parcourir :', arrayTest)
                this.setState({ resultat: arrayTest })
            })
    }

    render () {
        console.log('object', this.state.resultat)

        return (
            <div>
                <ListItemComponent text='RECHERCHE' />
                {/* const VignetteComponent = ({ urlPhoto, classname, name, text, codepostal }) */}
                {/* {this.state.resultat.map((resultat, index) => <VignetteComponent urlPhoto={resultat} key={index} />)} */}
                <VignetteComponent urlPhoto='..\src\img\caroussel\image1.jpeg' classname='toto' name='test name' text='PABLO GONZALES' codePostal='h22h2h2' />
                <button onClick={this.props.onHandleSaveOnClick}>retour recherche</button>

            </div>

        )
    }
}
export default ResultatRecherchePetsitter
