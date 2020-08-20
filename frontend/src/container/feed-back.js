
import React, { Component } from 'react'

import VignetteComponent from 'component/vignette-component'

import VignetteFeedBack from 'component/feedBack-component'


// import Boutton from 'component/bouton-component'

// import BoutonComponent from '../component/bouton-component'
class FormFeedBack extends Component {

        super(props)


        this.state = {


            count: 0,

            valeur: '',

            resultat: []


        }

        /* this.handleincrementMe = this.handleincrementMe.bind(this) */

        this.handleChange = this.handleChange.bind(this)

        this.handelEnvoiCommentaire = this.handelEnvoiCommentaire.bind(this)

        this.onChangeTextArea = this.onChangeTextArea.bind(this)

    }


    incrementMe () {

        const newCount = this.state.count + 1

    handleChange (changeEvent) {

        console.log(changeEvent.target.value)

    }


    handelEnvoiCommentaire (event) {

        this.setState({ valeur: event.target.value })

        console.log('valeur', this.state.valeur)

    }


        this.setState({

            count: newCount

        })

    handleFormSubmit (formSubmitEvent) {

        formSubmitEvent.preventDefault()

    }


    /**   handleincrementMe () {

        console.log('nombre de clik', this.state.count)

        this.setState({ count: this.state.count + 1 })


        // console.log('count', this.state.count)

    } */


    componentDidMount () {

        fetch('resultat-recherche.json', { method: 'GET' })

            .then(response => response.json())
@@ -36,9 +54,18 @@ class FormFeedBack extends Component {

        return (


            <div>

                <form id='form-feedBack'>

                <form id='form-feedBack' onSubmit={this.handleFormSubmit}>

                    <div>

                        {this.state.resultat.map((resultat, index) => <VignetteComponent urlPhoto={resultat.url_photo} name={resultat.nom} secteurAction={resultat.secteur_action} className='' key={index} />)}

                        {this.state.resultat.map((resultat, index) =>

                            <VignetteFeedBack

                                urlPhoto={resultat.url_photo} nom={resultat.nom} secteur_action={resultat.secteur_action}

                                type='radio' className='feedBack' key={index} onChangeEtat={this.handleChange} onChangeTextArea={this.handelEnvoiCommentaire} name={resultat.nom}

                                values={['pro', 'moyen', 'intermediaire', 'amateur', 'apprentie']}


                            />


                        )}


                    </div>

                </form>

            </div>
