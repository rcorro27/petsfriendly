import React, { Component } from 'react'
import axios from 'axios'
import InputComponent from 'component/input-component'
import SelectComponent from 'component/select-component'
import ListItemComponent from 'component/list-item-component'
// import ResultatRecherchePetsitter from 'container/resultat-recherche-pett-sitter-container'
// import Navbar from '../container/navbar-container'
// import Footer from '../component/Footer/Footer'
import VignetteComponent from 'component/vignette-component'

import '../css/test.css'
import ProfilDemandePettSitter from './profil-demande-pettsitter'

class RecherchePetsitter extends Component {
    constructor (props) {
        super(props)
        // question a poser a nassim voir les criteres comme il sont dans le request ????
        this.state = {

            garderChezPetsitter: false,
            garderChezVous: false,
            promenade: false,
            numeroRue: '',
            nomRue: 'toto',
            secteurAction: '',
            dateDebut: '',
            dateFin: '',
            typeAnimal: '',
            infolettre: '',
            resultatRecherche: false,
            rechercher: false,
            infosRecherche: [],
            username: '',
            recherche: false,
            resultat: []
            // idUser: false
        }

        this.handleAddOnClick = this.handleAddOnClick.bind(this)
        this.handleSaveOnClick = this.handleSaveOnClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
        // this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAfficherSitterOnClick = this.handleAfficherSitterOnClick.bind(this)
        this.handleEnvoyerDemandeOnClick = this.handleEnvoyerDemandeOnClick.bind(this)
    }

    recherche (user) {
        return axios
            .post('https://pets-friendly.herokuapp.com/utilisateurs/connexion', {
                email: user.userName,
                mot_de_passe: user.password
            })
            .then(response => response.json())
            .then(response => {
                const arrayTest = []
                response.resultatRecherche.map((info, index) => arrayTest.push(info))

                this.setState({ resultat: arrayTest })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount () {
        fetch('resultat-recherche.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                const arrayTest = []
                response.resultatRecherche.map((info, index) => arrayTest.push(info))

                this.setState({ resultat: arrayTest })
            })
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
        this.setState({ resultatRecherche: true })

        event.preventDefault()
    }

    handleAddOnClick () {
        this.setState({ resultatRecherche: true })
    }

    handleSaveOnClick () {
        this.setState({ resultatRecherche: false })
    }

    handleAfficherSitterOnClick (event) {
        // localStorage.removeItem('sitter')

        // console.log('local Storage:', JSON.parse(localStorage.getItem('sitter')))
    }

    handleEnvoyerDemandeOnClick (event) {
        console.log(this.state.resultat[event.target.name])
        localStorage.setItem('sitter', JSON.stringify(this.state.resultat[event.target.name]))

        // alert('demande envoyer' + event.target.name)
    }

    render () {
        const TYPEANIMAL = [
            {
                label: 'Chien',
                value: 'Chien '
            }, {
                label: 'Chat',
                value: 'Chat'
            }, {
                label: 'Autre',
                value: 'Autre'
            }]
        const service = [
            {
                id: 1,
                description: 'Promenade',
                prix_service: 20
            },
            {
                id: 2,
                description: 'Garder Chez Vous',
                prix_service: 15
            },
            {
                id: 3,
                description: 'Garder Chez Pet Sitter',
                prix_service: 20
            }

        ]
        function niveauPetSitter (niveau) {
            let niveauSitter = ''
            if (niveau > 0 && niveau < 50) {
                niveauSitter = 'Debutant'
            } else if (niveau >= 50 && niveau < 100) {
                niveauSitter = 'Normal'
            } else if (niveau >= 100 && niveau < 200) {
                niveauSitter = 'Intermediare'
            } else if (niveau >= 200 && niveau < 400) {
                niveauSitter = 'Proffesionel'
            } else if (niveau >= 400) {
                niveauSitter = 'Expert'
            }
            return niveauSitter
        }
        console.log(this.state.idUser)
        // voir les dates dans le formulaire a chaque fois il y a des erreus dans la console qui pointe le fait de ne pas avoir la bonne valeur date.now??
        return (

            <div>

                <div id='divPublicite'>
                    <div className='w-50 p-3 mx-auto bg-secondary text-white'>
                        <h1 className='h1'>Gagnez Temps et Tranquilite de d'esprit Recherchez ce qu'il vous faut on se occupe du reste </h1>
                    </div>
                </div>
                <h1 className='w-25 p-3 mx-auto'>Recherche Petsitter</h1>
                <div className='w-50 p-3 mx-auto img-fluid img-thumbnail'>
                    <form id='form-test' onSubmit={this.handleSubmit}>
                        <InputComponent classCss='form-check' classInput='form-form-check-input' labelClass='form-check-label' type='radio' textLabel='Garder Chez le PettSitter' id='garderChezPetsitter' name='gardeMaison' value={this.state.garderChezPetsitter} onChange={this.handleChange} />
                        <InputComponent classCss='form-check' classInput='form-form-check-input' labelClass='form-check-label' type='radio' textLabel='Garder chez vous' id='garderChezVous' name='gardeMaison' value={this.state.garderChezVous} onChange={this.handleChange} />
                        <InputComponent classCss='form-check' classInput='form-form-check-input' labelClass='form-check-label' type='checkbox' textLabel='Promenade' id='promenade' name='Promenade' value={this.state.promenade} onChange={this.handleChange} />
                        <InputComponent classCss='form-group' classInput='form-control' textLabel='Date de debut' type='date' id='dateDebut' name='dateDebut' onChange={this.handleChange} />
                        <InputComponent classCss='form-group' classInput='form-control' textLabel='Date de fin' type='date' id='dateFin' name='dateFin' onChange={this.handleChange} />
                        <InputComponent classCss='form-group' classInput='form-control' textLabel='Numero' type='number' id='numeroRue' name='numero' min={0} onChange={this.handleChange} />
                        <InputComponent classCss='form-group' classInput='form-control' textLabel='Nom de la rue' type='text' id='nomRue' name='nom de la rue' onChange={this.handleChange} />
                        <InputComponent classCss='form-group' classInput='form-control' textLabel='Code postal' type='text' id='secteurAction' name='secteurAction' onChange={this.handleChange} />
                        <SelectComponent classCss='form-group' classInput='form-control' textLabel='Ville:' id='province' name='province' options={TYPEANIMAL} onChange={this.handleChangeSelect} value={this.state.typeAnimal} />
                        <SelectComponent classCss='form-group' classInput='form-control' textLabel='Province:' id='ville' name='ville' options={TYPEANIMAL} onChange={this.handleChangeSelect} value={this.state.typeAnimal} />
                        <SelectComponent classCss='form-group' classInput='form-control' textLabel='Pays:' id='pays' name='pays' options={TYPEANIMAL} onChange={this.handleChangeSelect} value={this.state.typeAnimal} />
                        <SelectComponent classCss='form-group' classInput='form-control' textLabel='Type de animal:' id='typeAnimal' name='TypeAnimal' options={TYPEANIMAL} onChange={this.handleChangeSelect} value={this.state.typeAnimal} />
                        <InputComponent classInput='btn btn-outline-success' type='submit' id='rechercher' name='Rechercher ' value='rechercher' />
                    </form>
                </div>
                {this.state.idUser ? <ProfilDemandePettSitter idSitter={this.state.idUser} /> : ''}
                <div className='row'>
                    {this.state.resultatRecherche ? this.state.resultat.map((resultat, index) => <VignetteComponent urlPhoto={resultat.url_photo} nom={resultat.nom} rating={niveauPetSitter(resultat.rating)} className='col-lg-4 mt-3 ' key={index} onClickProfil={this.handleAfficherSitterOnClick} onClickEnvoyer={this.handleEnvoyerDemandeOnClick} classInput='fas fa-heart btn btn-outline-danger mx-auto' classInput2='fas fa-paper-plane btn btn-outline-success mx-auto' textBoutonProfil='Acceder au Profil' textBoutonEnvoyer='Envoyer une demande' servicesTotal={service} servicesSitter={resultat.services} id={index} />) : ''}
                    <button onClick={this.handleSaveOnClick}>retour recherche</button>
                </div>

                <div id='divPlubicite2'>
                    <h1 className='w-50 p-3 mx-auto h1'>Des Services Sur mesure pour un Animal d'exeption </h1>
                    <div className='row divAnnonce'>
                        <div className='col-lg-4 mx-auto border border-danger rounded'>
                            <ListItemComponent text='Faite garder votre animal a votre domicile ou celui du Pett Sitter' className='fas fa-check' />
                            <ListItemComponent text='Partez a votre rendez vous sans vous soucier de la promenade de votre chien' className='fas fa-check' />
                            <ListItemComponent text='Besoin de flexibilite? Choisisez les horraires et periodes qui vous conviennent' className='fas fa-check' />
                        </div>
                        <div className='col-lg-4 mx-auto border border-danger rounded'>
                            {/* METTRE UN ICONE DANS LAVANT DE LES LI POUR LA PUBLICITER */}
                            <ListItemComponent text='Tout les nouveaux gardiens passent une verification des antecedents de base' className='fas fa-check' />
                            <ListItemComponent text='Tout les gardiens fournissent un profil detaille et des informations personnel ' className='fas fa-check' />
                            <ListItemComponent text='tout les Pet Sitter sont agrees par notre equipe de specialistes chez Pets Friendly' className='fas fa-check' />
                        </div>
                    </div>
                </div>
                <div className='infolettreDiv mt-3'>
                    <h1 className='h1'>Laisse nous vous prevenir des nouveautes</h1>
                    <h6 className='h6'>Reste informe</h6>
                    <form>
                        <InputComponent classCss='form-group' classInput='form-control' textLabel='Entrez votre email' type='email' id='infolettre' name='infolettre' onChange={this.handleChange} />
                        <InputComponent classInput='btn btn-outline-danger' type='submit' id='infolettreButton' name='Envoyer ' value='Envoyer' />
                    </form>
                </div>

                <button onClick={this.props.onHandleSaveOnClickRichard}>retour a la page developement</button>

            </div>
        )
    }
}

export default RecherchePetsitter
