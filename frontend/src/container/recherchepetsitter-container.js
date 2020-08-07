import React, { Component } from 'react'

import InputComponent from 'component/input-component'
import SelectComponent from 'component/select-component'
import ListItemComponent from 'component/list-item-component'
import ResultatRecherchePetsitter from 'container/resultat-recherche-pett-sitter-container'
import Navbar from '../container/navbar-container'
import Footer from '../component/Footer/Footer'

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
            typeAnimal: 'pas de select',
            resultatRecherche: false,
            rechercher: false,
            images: []
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
        console.log(event.target.id)
        /* if (event.target.id === 'garderChezPetsitter') {
            // appeler une functioon qui passe garder chez vous a false et vice versa pour eviter la selection de les deux au  meme temps
            this.setState({ garderChezPetsitter: true })
        } */
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
        case 'typeAnimal':
            this.setState({ typeAnimal: event.target.value })
        }
    }

    handleSubmit (event) {
        alert('An essay was submitted: ' + this.state.nomRue)
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
            value: '1'
        }, {
            label: 'Chat',
            value: '2'
        }, {
            label: 'Souris',
            value: '3'
        }, {
            label: 'Crocodile',
            value: '4'
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

        // voir les dates dans le formulaire a chaque fois il y a des erreus dans la console qui pointe le fait de ne pas avoir la bonne valeur date.now??
        return (

            <div>
                <Navbar />
                <h1>Recherche Petsitter</h1>
                <form id='form-test' onSubmit={this.handleSubmit}>
                    <InputComponent type='radio' text='Garder Chez le PettSitter' id='garderChezPetsitter' name='gardeMaison' value={this.state.garderChezPetsitter} onChange={this.handleChange} />
                    <InputComponent type='radio' text='Garder chez vous' id='garderChezVous' name='gardeMaison' value={this.state.garderChezVous} onChange={this.handleChange} />
                    <InputComponent type='checkbox' text='Promenade' id='promenade' name='Promenade' value={this.state.promenade} onChange={this.handleChange} />

                    <InputComponent text='Date de debut' type='date' id='dateDebut' name='dateDebut' onChange={this.handleChange} />
                    <InputComponent text='Date de fin' type='date' id='dateFin' name='dateFin' onChange={this.handleChange} />
                    {/* MINIMUN A AJOUTER A NUMERO ERREUR DE CHIFRES NEGATIF ligne 21 */}
                    <InputComponent text='Numero' type='number' id='numeroRue' name='numero' min={0} onChange={this.handleChange} />
                    <InputComponent text='Nom de la rue' type='text' id='nomRue' name='nom de la rue' onChange={this.handleChange} />
                    <InputComponent text='Code postal' type='text' id='secteurAction' name='secteurAction' onChange={this.handleChange} />
                    {/* Checkbox selection animal ??? demander si ca ne devrait pas etre un select ??? */}
                    <SelectComponent text='Type de animal:' id='typeAnimal' name='TypeAnimal' options={TYPEANIMAL} onChange={this.handleChangeSelect} value={this.state.typeAnimal} />
                    {/* DEMANDER A NASSIM PAR RAPPORT A LA RACE */}
                    <InputComponent type='submit' id='rechercher' name='Rechercher ' value='rechercher' />
                </form>
                <button onClick={this.handleAddOnClick}>RECHERCHE RESULTAT</button>
                {this.state.resultatRecherche ? <ResultatRecherchePetsitter onHandleSaveOnClick={this.handleSaveOnClick} /> : ''}

                <h1>Des Services Sur mesure pour un Animal d'exeption </h1>
                <div>
                    <ListItemComponent text='Faite garder votre animal a votre domicile ou celui du Pett Sitter' />
                    <ListItemComponent text='Partez au travail ou a votre rendez vous sans vous soucier de la promenade de votre chien' />
                    <ListItemComponent text='Besoin de flexibilite? Choisisez les horraires et periodes qui vous conviennent' />
                </div>
                {/* DEMANDER A YAHIA SON CODE POUR UTILISER UNE PARTUE DE NAV BAR POUR LA VIGNETTE */}
                <div>
                    {/* METTRE UN ICONE DANS LAVANT DE LES LI POUR LA PUBLICITER */}
                    <ListItemComponent text='Tout les nouveaux gardiens passent une verification des antecedents de base' />
                    <ListItemComponent text='Tout les gardiens fournissent un profil detaille et des informations personnel ' />
                    <ListItemComponent text='tout les Pet Sitter sont agrees par notre equipe de specialistes chez Pets Friendly' />
                </div>
                <div>
                    <h1>Laisse nous vous prevenir des nouveautes</h1>
                    <h6>Reste informe</h6>
                    <InputComponent text='Entrez votre email' type='text' id='infolettre' name='infolettre' />
                </div>
                <Footer />
                <button onClick={this.props.onHandleSaveOnClickRichard}>retour a la page developement</button>

            </div>
        )
    }
}

export default RecherchePetsitter
