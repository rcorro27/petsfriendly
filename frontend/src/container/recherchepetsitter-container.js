import React, { Component } from 'react'

import InputComponent from 'component/input-component'
import SelectComponent from 'component/select-component'
import ListItemComponent from 'component/list-item-component'
import ResultatRecherchePetsitter from 'container/resultat-recherche-pett-sitter-container'
import Navbar from '../container/navbar-container'
import Footer from '../component/Footer/Footer'
import '../css/test.css'

class RecherchePetsitter extends Component {
    constructor (props) {
        super(props)
        // question a poser a nassim voir les criteres comme il sont dans le request ????
        this.state = {

            garderChezPetsitter: false,
            garderChezVous: false,
            promenade: false,
            numeroRue: '',
            nomRue: '',
            secteurAction: '',
            dateDebut: '',
            dateFin: '',
            typeAnimal: '',
            infolettre: '',
            resultatRecherche: false,
            rechercher: false,
            infosRecherche: []
        }

        this.handleAddOnClick = this.handleAddOnClick.bind(this)
        this.handleSaveOnClick = this.handleSaveOnClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
        // this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeSelect (event) {
        this.setState({ typeAnimal: event.target.value })
    }

    handleChange (event) {
        switch (event.target.id) {
        case 'garderChezPetsitter':
            this.setState({ garderChezPetsitter: true })
            break
        case 'garderChezVous':
            this.setState({ garderChezVous: true })
            break
        case 'dateDebut':
            this.setState({ dateDebut: event.target.value })
            break
        case 'dateFin':
            this.setState({ dateFin: event.target.value })
            break
        case 'promenade':
            this.setState({ promenade: true })
            break
        case 'numeroRue':
            this.setState({ numeroRue: event.target.value })
            break
        case 'nomRue':
            this.setState({ nomRue: event.target.value })
            break
        case 'secteurAction':
            this.setState({ codePostal: event.target.value })
            break
        case 'infolettre':
            this.setState({ infolettre: event.target.value })
        }
    }

    handleSubmit (event) {
        alert('An essay was submitted: ' + JSON.stringify(this.state.promenade) + this.state.garderChezPetsitter)
        event.preventDefault()
    }

    handleAddOnClick () {
        this.setState({ resultatRecherche: true })
    }

    handleSaveOnClick () {
        this.setState({ resultatRecherche: false })
    }

    render () {
        const TYPEANIMAL = [{
            label: 'Chien',
            value: 'Chien '
        }, {
            label: 'Chat',
            value: 'Chat'
        }, {
            label: 'Souris',
            value: 'Souris'
        }, {
            label: 'Crocodile',
            value: 'Crocodile'
        }]

        console.log(this.state.garderChezPetsitter)
        console.log(this.state.garderChezVous)
        console.log(this.state.promenade)
        console.log(this.state.dateDebut)
        console.log(this.state.dateFin)
        console.log(this.state.numeroRue)
        console.log(this.state.nomRue)
        console.log(this.state.codePostal)
        console.log(this.state.typeAnimal)
        console.log(this.state.infolettre)

        // voir les dates dans le formulaire a chaque fois il y a des erreus dans la console qui pointe le fait de ne pas avoir la bonne valeur date.now??
        return (

            <div>
                <Navbar />
                <h1>Recherche Petsitter</h1>
                <div className='formRechercheContainer'>
                    <form id='form-test' onSubmit={this.handleSubmit}>
                        <InputComponent type='radio' text='Garder Chez le PettSitter' id='garderChezPetsitter' name='gardeMaison' value={this.state.garderChezPetsitter} onChange={this.handleChange} />
                        <InputComponent type='radio' text='Garder chez vous' id='garderChezVous' name='gardeMaison' value={this.state.garderChezVous} onChange={this.handleChange} />
                        <InputComponent type='checkbox' text='Promenade' id='promenade' name='Promenade' value={this.state.promenade} onChange={this.handleChange} />

                        <InputComponent text='Date de debut' type='date' id='dateDebut' name='dateDebut' onChange={this.handleChange} />
                        <InputComponent text='Date de fin' type='date' id='dateFin' name='dateFin' onChange={this.handleChange} />

                        <InputComponent text='Numero' type='number' id='numeroRue' name='numero' min={0} onChange={this.handleChange} />
                        <InputComponent text='Nom de la rue' type='text' id='nomRue' name='nom de la rue' onChange={this.handleChange} />
                        <InputComponent text='Code postal' type='text' id='secteurAction' name='secteurAction' onChange={this.handleChange} />

                        <SelectComponent text='Type de animal:' id='typeAnimal' name='TypeAnimal' options={TYPEANIMAL} onChange={this.handleChangeSelect} value={this.state.typeAnimal} />

                        <InputComponent type='submit' id='rechercher' name='Rechercher ' value='rechercher' />
                    </form>
                </div>
                <button onClick={this.handleAddOnClick}>RECHERCHE RESULTAT</button>
                {this.state.resultatRecherche ? <ResultatRecherchePetsitter onHandleSaveOnClick={this.handleSaveOnClick} testData={this.state.nomRue} /> : ''}

                <h1>Des Services Sur mesure pour un Animal d'exeption </h1>
                <div>
                    <ListItemComponent text='Faite garder votre animal a votre domicile ou celui du Pett Sitter' />
                    <ListItemComponent text='Partez au travail ou a votre rendez vous sans vous soucier de la promenade de votre chien' />
                    <ListItemComponent text='Besoin de flexibilite? Choisisez les horraires et periodes qui vous conviennent' />
                </div>

                <div>
                    {/* METTRE UN ICONE DANS LAVANT DE LES LI POUR LA PUBLICITER */}
                    <ListItemComponent text='Tout les nouveaux gardiens passent une verification des antecedents de base' />
                    <ListItemComponent text='Tout les gardiens fournissent un profil detaille et des informations personnel ' />
                    <ListItemComponent text='tout les Pet Sitter sont agrees par notre equipe de specialistes chez Pets Friendly' />
                </div>
                <div className='infolettreDiv'>
                    <h1>Laisse nous vous prevenir des nouveautes</h1>
                    <h6>Reste informe</h6>
                    <form>
                        <InputComponent text='Entrez votre email' type='email' id='infolettre' name='infolettre' onChange={this.handleChange} />
                        <InputComponent type='submit' id='infolettreButton' name='Envoyer ' value='Envoyer' />
                    </form>
                </div>
                <Footer />
                <button onClick={this.props.onHandleSaveOnClickRichard}>retour a la page developement</button>

            </div>
        )
    }
}

export default RecherchePetsitter
