import React, { Component } from 'react'
import FormData from 'form-data'
import { Link, withRouter } from 'react-router-dom'
import '../css/profil.css'
import InputComponent from 'component/input-component'
import ListItemComponent from 'component/list-item-component'
import axios from 'axios'
import { Button } from 'react-bootstrap'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            user: [],
            address: [],
            nom: '',
            urlImg: '',
            prenom: '',
            age: '',
            email: '',
            sexe: '',
            telephone: '',
            est_valide: false,
            selectedFile: '',
            errors: {}
        }
        this.fileSelected = this.fileSelected.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }

    componentDidMount() {
        // const token = localStorage.usertoken
        // const decoded = jwtdecode(token)
        if (localStorage.getItem('usertoken')) {
            this.setState({
                user: JSON.parse(localStorage.getItem('usertoken')).utilisateur,
                address: JSON.parse(localStorage.getItem('usertoken')).adresse,
                nom: JSON.parse(localStorage.getItem('usertoken')).utilisateur.nom,
                prenom: JSON.parse(localStorage.getItem('usertoken')).utilisateur.prenom,
                age: JSON.parse(localStorage.getItem('usertoken')).utilisateur.age,
                sexe: JSON.parse(localStorage.getItem('usertoken')).utilisateur.sexe,
                telephone: JSON.parse(localStorage.getItem('usertoken')).utilisateur.telephone,
                est_valide: JSON.parse(localStorage.getItem('usertoken')).utilisateur.est_valide,
                email: JSON.parse(localStorage.getItem('usertoken')).utilisateur.email,
                urlImg: 'https://pets-friendly.herokuapp.com/images/images_profiles/' + JSON.parse(localStorage.getItem('usertoken')).utilisateur.url_photo
            })
        } else {
            this.props.history.push('/')
        }
    }

    fileSelected(e) {
        this.setState({
            selectedFile: e.target.files[0]
        })
        console.log(e.target.files[0])
    }

    fileUpload(e) {
        const image = this.state.selectedFile
        e.preventDefault()
        const data = new FormData()
        data.append('file', image)
        console.log('filename', image)
        console.log('data', data)
        const id = JSON.parse(localStorage.getItem('usertoken')).utilisateur.id

        axios
            .post(`https://pets-friendly.herokuapp.com/photos/profile/ajout/utilisateur/${id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }

            })
            .then(response => {
                // localStorage.setItem('usertoken', JSON.stringify(response.data))
                console.log(response.data)
                this.setState({
                    imgUrl: response.data
                })
                console.log(localStorage.getItem('usertoken'))

                return response.data
            })
            .catch(err => {
                console.log(err)
            })
        // commentaire test
    }

    render() {
        console.log('image', this.state.urlImg)
        return (
            <div className='container'>

                <img src={this.state.urlImg} className='image-profil' alt='Cinque Terre' />
                <div className='jumbotron mt-5 bg-light'>
                    <div className='col-sm-8 mx-auto'>
                        {this.state.est_valide ? <h3 className='text-center text-success '> Votre profil est activé, vous pouvez accéder aux services</h3> : <h3 className='text-center text-danger '>Votre profil n'est pas encore valide , vous n'avez pas l'acces a nos services</h3>}
                        <h1 className='text-center'>PROFIL </h1>
                    </div>

                    <Link to='/update'> <Button id='bouton1'>Update Profil</Button></Link>
                    <Link to='/contrats'> <Button id='bouton1'>Afficher les contrat</Button></Link>

                    <table className='table col-md-6 mx-auto'>
                        <tbody>
                            <tr>
                                <td>Prénom</td>
                                <td>{this.state.user.nom}</td>
                            </tr>
                            <tr>
                                <td>Nom</td>
                                <td>{this.state.user.prenom}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.user.email}</td>
                            </tr>
                            <tr>
                                <td>Âge</td>
                                <td>{this.state.user.age}</td>
                            </tr>
                            <tr>
                                <td>Sexe</td>
                                <td>{this.state.user.sexe}</td>
                            </tr>
                            <tr>
                                <td>Téléphone</td>
                                <td>{this.state.user.telephone}</td>
                            </tr>
                            <tr>
                                <td>Numéro de la rue</td>
                                <td>{this.state.address.numero_rue}</td>
                            </tr>
                            <tr>
                                <td>Nom de la rue</td>
                                <td>{this.state.address.nom_rue}</td>
                            </tr>
                            <tr>
                                <td>Code Postal</td>
                                <td>{this.state.address.code_postal}</td>
                            </tr>
                            <tr>
                                <td>Ville</td>
                                <td>{this.state.address.ville}</td>
                            </tr>
                            <tr>
                                <td>Province</td>
                                <td>{this.state.address.province}</td>
                            </tr>
                            <tr>
                                <td>Pays</td>
                                <td>{this.state.address.pays}</td>
                            </tr>
                            <tr>
                                <td>Numéro appartement</td>
                                <td>{this.state.address.numero_appt}</td>
                            </tr>
                            {/* je veux pusher cette page aussi */}

                        </tbody>
                    </table>
                </div>
                <div id='divPlubicite2'>
                    <h1 className='w-50 p-3 mx-auto h1'>Des services sur mesure pour un animal d'exeption </h1>
                    <div className='row divAnnonce'>
                        <div className='col-lg-4 mx-auto border border-danger rounded serviceProposes'>
                            <ListItemComponent text='Faites garder votre animal à votre domicile ou à celui du Pet Sitter' className='fas fa-check' />
                            <ListItemComponent text='Partez à votre rendez-vous sans vous soucier de la promenade de votre chien' className='fas fa-check' />
                            <ListItemComponent text='Besoin de flexibilité? Choisissez les horaires et périodes qui vous conviennent' className='fas fa-check' />
                        </div>
                        <div className='col-lg-4 mx-auto border border-danger rounded serviceProposes'>
                            {/* METTRE UN ICONE DANS LAVANT DE LES LI POUR LA PUBLICITER */}
                            <ListItemComponent text='Tous les nouveaux gardiens passent une vérification des antécédents de base' className='fas fa-check' />
                            <ListItemComponent text='Tous les gardiens fournissent un profil détaillé et des informations personnelles ' className='fas fa-check' />
                            <ListItemComponent text='Tous les Pet Sitter sont agréés par notre équipe de spécialistes chez Pets Friendly' className='fas fa-check' />
                        </div>
                    </div>
                </div>
                <div className='infolettreDiv mt-3'>
                    <h1 className='h1'>Laissez nous vous prévenir de nos nouveautés</h1>
                    <h6 className='h6'>Restez informé</h6>
                    <form>
                        <InputComponent classCss='form-group' classInput='form-control' textLabel='Entrez votre email' type='email' id='infolettre' name='infolettre' onChange={this.handleChange} />
                        <InputComponent classInput='btn btn-outline-danger' type='submit' id='infolettreButton' name='Envoyer ' value='Envoyer' />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Profile)
