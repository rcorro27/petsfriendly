import React, { Component } from 'react'
import FormData from 'form-data'

import axios from 'axios'
import { Button } from 'react-bootstrap'

class Profile extends Component {
    constructor () {
        super()
        this.state = {
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

    componentDidMount () {
        // const token = localStorage.usertoken
        // const decoded = jwtdecode(token)
        if (localStorage.getItem('usertoken')) {
            this.setState({
                nom: JSON.parse(localStorage.getItem('usertoken')).utilisateur.nom,
                prenom: JSON.parse(localStorage.getItem('usertoken')).utilisateur.prenom,
                age: JSON.parse(localStorage.getItem('usertoken')).utilisateur.age,
                sexe: JSON.parse(localStorage.getItem('usertoken')).utilisateur.sexe,
                telephone: JSON.parse(localStorage.getItem('usertoken')).utilisateur.telephone,
                est_valide: JSON.parse(localStorage.getItem('usertoken')).utilisateur.est_valide,
                email: JSON.parse(localStorage.getItem('usertoken')).utilisateur.email,
                urlImg: 'http://pets-friendly.herokuapp.com/images/images_profiles/' + JSON.parse(localStorage.getItem('usertoken')).utilisateur.url_photo
            })
        } else {
            this.props.history.push('/')
        }
    }

    fileSelected (e) {
        this.setState({
            selectedFile: e.target.files[0]
        })
        console.log(e.target.files[0])
    }

    fileUpload (e) {
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
    }

    render () {
        console.log('state', this.state.urlImg)
        return (
            <div className='container'>

                <img src={this.state.urlImg} className='img-rounded' alt='Cinque Terre' />
                <div className='jumbotron mt-5'>
                    <div className='col-sm-8 mx-auto'>
                        {this.state.est_valide ? <h3 className='text-center text-success '> Votre profile est active vous pouvez acceder aux services</h3> : <h3 className='text-center text-danger '>Votre profil n'est pas encore valide , vous n'avez pas l'acces a nos services</h3>}
                        <h1 className='text-center'>PROFILE </h1>
                    </div>
                    <form method='post' encType='multipart/form-data'>

                        <div className='form-group'>
                            <label htmlFor='exampleFormControlFile1'>Mettre une photo de profil</label>
                            <input name='image' type='file' className='form-control-file' id='exampleFormControlFile1' onChange={this.fileSelected} />
                            <Button onClick={this.fileUpload}>Upload</Button>
                        </div>
                    </form>

                    <table className='table col-md-6 mx-auto'>
                        <tbody>
                            <tr>
                                <td>Fist Name</td>
                                <td>{this.state.nom}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.prenom}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>{this.state.age}</td>
                            </tr>
                            <tr>
                                <td>Sexe</td>
                                <td>{this.state.sexe}</td>
                            </tr>
                            <tr>
                                <td>Telephone</td>
                                <td>{this.state.telephone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile
