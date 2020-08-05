import React, { Component } from 'react'

import InputComponent from 'component/input-component'
import SelectComponent from 'component/select-component'
import ListItemComponent from 'component/list-item-component'
import ResultatRecherchePetsitter from 'container/resultat-recherche-pett-sitter-container'
import Navbar from '../container/navbar-container'

class RecherchePetsitter extends Component {
    constructor (props) {
        super(props)
        // question a poser a nassim voir les criteres comme il sont dans le request ????
        this.state = {
            garderChezPetsitter: 'garder chez le petsitter',
            garderChezVous: 'garder chez vous',
            promenade: 'promenade',
            resultatRecherche: false,

            images: []
        }

        this.handleAddOnClick = this.handleAddOnClick.bind(this)
        this.handleSaveOnClick = this.handleSaveOnClick.bind(this)
        /*  this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        */
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

        // voir les dates dans le formulaire a chaque fois il y a des erreus dans la console qui pointe le fait de ne pas avoir la bonne valeur date.now??
        return (

            <div>
                <Navbar />
                <h1>Recherche Petsitter</h1>
                <form id='form-test' onSubmit={this.handleSubmit}>
                    <InputComponent type='radio' text='Garder Chez le PettSitter' id='garderChezPetsitter' name='gardeMaison' value={this.state.garderChezPetsitter} />
                    <InputComponent type='radio' text='Garder chez vous' id='GarderChezVous' name='gardeMaison' value={this.state.garderChezVous} />
                    <InputComponent type='radio' text='Promenade' id='promenade' name='Promenade' value={this.state.promenade} />

                    <InputComponent text='Date de debut' type='date' id='dateDebut' name='dateDebut' />
                    <InputComponent text='Date de fin' type='date' id='dateFin' name='dateFin' />
                    {/* MINIMUN A AJOUTER A NUMERO ERREUR DE CHIFRES NEGATIF ligne 21 */}
                    <InputComponent text='Numero' type='number' id='nro' name='numero' min={0} />
                    <InputComponent text='Nom de la rue' type='text' id='nomRue' name='nom de la rue' />
                    <InputComponent text='Code postal' type='text' id='secteurAction' name='secteurAction' />
                    {/* Checkbox selection animal ??? demander si ca ne devrait pas etre un select ??? */}
                    <SelectComponent text='Type de animal:' id='typeAnimal_id' name='Type animal' options={TYPEANIMAL} />
                    {/* DEMANDER A NASSIM PAR RAPPORT A LA RACE */}
                    <InputComponent type='submit' id='rechercher' name='Rechercher ' value='rechercher' onClick={this.handleClick} />
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
                <button onClick={this.props.onHandleSaveOnClickRichard}>retour a la page developement</button>

            </div>
        )
    }
}

export default RecherchePetsitter
