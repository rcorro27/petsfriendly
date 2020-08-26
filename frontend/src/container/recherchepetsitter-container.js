
import React, { Component } from 'react'
import axios from 'axios'
import InputComponent from 'component/input-component'
import SelectComponent from 'component/select-component'
import ListItemComponent from 'component/list-item-component'
import VignetteComponent from 'component/vignette-component'
import ModalCnxContainer from '../container/modal-cnx-container'
import { withRouter } from 'react-router-dom'

import '../css/recherche.css'
import ProfilDemandePettSitter from './profil-demande-pettsitter'

class RecherchePetsitter extends Component {
    constructor(props) {
        super(props)
        // question a poser a nassim voir les criteres comme il sont dans le request ????
        this.state = {
            garderChezPetsitter: 0,
            garderChezVous: 0,
            promenade: 0,
            numero_rue: '',
            nom_rue: '',
            code_postal: '',
            ville: 'toto',
            pays: '',
            dateDebut: '',
            dateFin: '',
            typeAnimal: '',
            infolettre: '',

            resultatRecherche: false,
            rechercher: false,
            infosRecherche: [],
            username: '',
            recherche: false,
            resultat: [],
            province: '',
            servicesTotal: [],
            show: false

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
        this.onHandleClose = this.onHandleClose.bind(this)
    }

    onHandleClose() {
        this.setState({
            show: false
        })
    }

    componentDidMount() {
        return axios
            .get('https://pets-friendly.herokuapp.com/services/recuperation/tout')
            // .then(response => console.log(response.data))
            .then(response => {
                const service = []
                response.data.map((info, index) => service.push(info))
                console.log('services', service)
                localStorage.setItem('servicestotal', JSON.stringify(service))
                this.setState({ servicesTotal: service })
                // event.preventDefault()
            })
            .catch(err => {
                console.log('erreur recherche:', err)
            })
    }

    handleChangeSelect(event) {
        this.setState({ typeAnimal: event.target.value })
    }

    handleChange(event) {
        switch (event.target.id) {
            case 'garderChezPetsitter':

                this.setState({ garderChezPetsitter: 1 })
                break
            case 'garderChezVous':

                this.setState({ garderChezVous: 2 })
                break
            case 'dateDebut':
                this.setState({ dateDebut: event.target.value })
                break
            case 'dateFin':
                this.setState({ dateFin: event.target.value })
                break
            case 'promenade':
                this.setState({ promenade: 3 })
                break
            case 'numeroRue':
                this.setState({ numero_rue: event.target.value })
                break
            case 'nomRue':
                this.setState({ nom_rue: event.target.value })
                break
            case 'secteurAction':
                this.setState({ code_postal: event.target.value })
                break
            case 'province':
                this.setState({ province: event.target.value })
                break
            case 'ville':
                this.setState({ ville: event.target.value })
                break
            case 'pays':
                this.setState({ pays: event.target.value })
                break
            case 'infolettre':
                this.setState({ infolettre: event.target.value })
        }
    }

    handleSubmit(event) {
        fetch('resultat-recherche.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                const arrayTest = []
                console.log(response.resultatRecherche)
                response.resultatRecherche.map((info, index) => arrayTest.push(info))
                console.log(arrayTest)
                this.setState({ resultat: arrayTest })
            })
        /* return axios
            .post('https://pets-friendly.herokuapp.com/recherche', {

                services: [
                    4
                ],
                adresse: {
                    numero_rue: 1890,
                    nom_rue: 'parthenais',
                    code_postal: 'H2K 3S3',
                    ville: 'montreal',
                    pays: 'canada'
                }

            })
            .then(response => console.log(response))
            .then(response => {
                const arrayTest = []
                response.data.map((info, index) => arrayTest.push(info))
                console.log(arrayTest)
                this.setState({ resultat: arrayTest })
            })
            .catch(err => {
                console.log('erreur recherche:', err)
            }) */
    }

    handleAddOnClick() {
        this.setState({ resultatRecherche: true })
    }

    handleSaveOnClick() {
        this.setState({ resultatRecherche: false })
    }

    handleAfficherSitterOnClick(event) {
        console.log(this.state.resultat[event.target.name])
        localStorage.setItem('sitter', JSON.stringify(this.state.resultat[event.target.name]))
        this.props.history.push('/demande')
        // localStorage.removeItem('sitter')

        // console.log('local Storage:', JSON.parse(localStorage.getItem('sitter')))
    }

    handleEnvoyerDemandeOnClick(event) {

    }

    render() {
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

        const servicesTotal = [
            {
                id: 1,
                description: 'Promenade',
                prix_service: 20
            }, {
                id: 2,
                description: 'Garder a la maison',
                prix_service: 45
            }, {
                id: 3,
                // ??????????????????????????????????? est ce que je peux corriger ca
                description: 'Garder chez vous ',
                prix_service: 15
            }]

        function niveauPetSitter(niveau) {
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
        console.log('recherche info : ', this.state.servicesTotal)
        console.log('state :', this.state.resultat)

        // voir les dates dans le formulaire a chaque fois il y a des erreus dans la console qui pointe le fait de ne pas avoir la bonne valeur date.now??
        return (
            <div>

                <div id='divPublicite'>
                    <div className='greyboxdiv'>
                        <h1 className='h1'>Gagnez temps et tranquilite d'esprit. Recherchez ce qu'il vous faut, on s'occupe du reste! </h1>
                    </div>
                </div>
                <h1 className='w-25 p-3 mx-auto'>Recherche Petsitter</h1>
                <div className='w-50 p-3 mx-auto img-fluid img-thumbnail'>

                    <InputComponent classCss='form-check' classInput='form-form-check-input' labelClass='form-check-label' type='radio' textLabel='Garder Chez le PettSitter' id='garderChezPetsitter' name='gardeMaison' value={this.state.garderChezPetsitter} onChange={this.handleChange} />
                    <InputComponent classCss='form-check' classInput='form-form-check-input' labelClass='form-check-label' type='radio' textLabel='Garder chez vous' id='garderChezVous' name='gardeMaison' value={this.state.garderChezVous} onChange={this.handleChange} />
                    <InputComponent classCss='form-check' classInput='form-form-check-input' labelClass='form-check-label' type='checkbox' textLabel='Promenade' id='promenade' name='Promenade' value={this.state.promenade} onChange={this.handleChange} />
                    <InputComponent classCss='form-group' classInput='form-control' textLabel='Date de debut' type='date' id='dateDebut' name='dateDebut' onChange={this.handleChange} />
                    <InputComponent classCss='form-group' classInput='form-control' textLabel='Date de fin' type='date' id='dateFin' name='dateFin' onChange={this.handleChange} />
                    <InputComponent classCss='form-group' classInput='form-control' textLabel='Numero' type='number' id='numeroRue' name='numero' min={0} onChange={this.handleChange} />
                    <InputComponent classCss='form-group' classInput='form-control' textLabel='Nom de la rue' type='text' id='nomRue' name='nom de la rue' onChange={this.handleChange} />
                    <InputComponent classCss='form-group' classInput='form-control' textLabel='Code postal' type='text' id='secteurAction' name='secteurAction' onChange={this.handleChange} />
                    <InputComponent classCss='form-group' classInput='form-control' textLabel='Ville' type='text' id='ville' name='ville' onChange={this.handleChange} />
                    <InputComponent classCss='form-group' classInput='form-control' textLabel='pays' type='text' id='pays' name='pays' onChange={this.handleChange} />
                    <SelectComponent classCss='form-group' classInput='form-control' textLabel='Type de animal:' id='typeAnimal' name='TypeAnimal' options={TYPEANIMAL} onChange={this.handleChangeSelect} value={this.state.typeAnimal} />
                    <InputComponent classInput='btn btn-outline-success' type='submit' id='rechercher' name='Rechercher ' value='rechercher' onClick={this.handleSubmit} />
                </div>
                {this.state.idUser ? <ProfilDemandePettSitter idSitter={this.state.idUser} /> : ''}
                <div className='row'>
                    {this.state.resultat ? this.state.resultat.map((resultat, index) => <VignetteComponent urlPhoto={resultat.url_photo} nom={resultat.nom} rating={niveauPetSitter(resultat.rating)} className='col-lg-4 mt-3 ' key={index} onClickProfil={this.handleAfficherSitterOnClick} onClickEnvoyer={this.handleEnvoyerDemandeOnClick} classInput='fas fa-heart btn btn-outline-danger w-100 p-3 mx-auto' classInput2='fas fa-paper-plane btn btn-outline-success mx-auto' textBoutonProfil='Acceder au Profil' textBoutonEnvoyer='Envoyer une demande' servicesTotal={servicesTotal} servicesSitter={resultat.services} id={index} />) : ''}

                </div>

                <div id='divPlubicite2'>
                    <h1 className='w-50 p-3 mx-auto h1'>Des services sur mesure pour un animal d'exeption </h1>
                    <div className='row divAnnonce'>
                        <div className='col-lg-4 mx-auto border border-danger rounded serviceProposes' >
                            <ListItemComponent text='Faites garder votre animal à votre domicile ou à celui du Pet Sitter' className='fas fa-check' />
                            <ListItemComponent text='Partez à votre rendez-vous sans vous soucier de la promenade de votre chien' className='fas fa-check' />
                            <ListItemComponent text='Besoin de flexibilite? Choisissez les horaires et periodes qui vous conviennent' className='fas fa-check' />
                        </div>
                        <div className='col-lg-4 mx-auto border border-danger rounded serviceProposes'>
                            {/* METTRE UN ICONE DANS LAVANT DE LES LI POUR LA PUBLICITER */}
                            <ListItemComponent text='Tous les nouveaux gardiens passent une verification des antecedents de base' className='fas fa-check' />
                            <ListItemComponent text='Tous les gardiens fournissent un profil detaille et des informations personnelles ' className='fas fa-check' />
                            <ListItemComponent text='Tous les Pet Sitter sont agrees par notre equipe de specialistes chez Pets Friendly' className='fas fa-check' />
                        </div>
                    </div>
                </div>
                <div className='infolettreDiv mt-3'>
                    <h1 className='h1'>Laissez nous vous prevenir des nouveautes</h1>
                    <h6 className='h6'>Restez informe</h6>
                    <form>
                        <InputComponent classCss='form-group' classInput='form-control' textLabel='Entrez votre email' type='email' id='infolettre' name='infolettre' onChange={this.handleChange} />
                        <InputComponent classInput='btn btn-outline-danger' type='submit' id='infolettreButton' name='Envoyer ' value='Envoyer' />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(RecherchePetsitter)