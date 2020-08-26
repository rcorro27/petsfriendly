import React, { Component } from 'react'
import FormData from 'form-data'

import axios from 'axios'
import { Button } from 'react-bootstrap'
import '../css/profil.css'

class UpdateProfile extends Component {
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
            user: [],
            address: [],
            est_valide: false,
            selectedFile: '',
            errors: {}
        }
        this.onTodoChange = this.onTodoChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }

    componentDidMount () {
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

    onTodoChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render () {
        console.log('state', this.state.urlImg)
        return (
            <div className='container'>
                <div className='modal-body mx-3'>

                    <div className='md-form mb-5'>
                        <input type='text' className='form-control validate' name='nom' value={this.state.user.nom} onChange={this.onTodoChange} />
                        <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Ton Nom</label>

                    </div>
                </div>
                <div className='modal-body mx-3'>

                    <div className='md-form mb-5'>
                        <input type='text' className='form-control validate' name='prenom' value={this.state.user.prenom} onChange={this.onTodoChange} />
                        <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Ton Prenom</label>

                    </div>
                </div>
                <div className='modal-body mx-3'>

                    <div className='md-form mb-5'>
                        <input type='text' className='form-control validate' name='sexe' value={this.state.user.sexe} onChange={this.onTodoChange} />
                        <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Ton sexe</label>

                    </div>
                </div>
                <div className='modal-body mx-3'>

                    <div className='md-form mb-5'>
                        <input type='tel' className='form-control validate' name='telephone' value={this.state.user.telephone} onChange={this.onTodoChange} />
                        <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Ton numero de telephone </label>

                    </div>
                </div>
                <div className='modal-body mx-3'>

                    <div className='md-form mb-5'>

                        <input type='email' className='form-control validate' name='email' value={this.state.user.email} onChange={this.onTodoChange} />
                        <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Ton Email</label>

                    </div>
                </div>
                <div className='modal-body mx-3'>

                    <div className='md-form mb-5'>
                        <input type='number' className='form-control validate' name='numero_rue' value={this.state.address.numero_rue} onChange={this.onTodoChange} />
                        <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Numero de rue</label>

                    </div>

                </div>
                <div className='modal-body mx-3'>

                    <div className='md-form mb-5'>
                        <input type='text' className='form-control validate' name='nom_rue' value={this.state.address.nom_rue} onChange={this.onTodoChange} />
                        <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Nom de rue</label>

                    </div>

                </div>
                <div className='modal-body mx-3'>

                    <div className='md-form mb-5'>
                        <input type='text' className='form-control validate' name='code_postal' value={this.state.address.code_postal} onChange={this.onTodoChange} />
                        <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Code Postal</label>

                    </div>

                </div>
                <div className='modal-body mx-3'>

                    <div className='md-form mb-5'>
                        <input type='text' className='form-control validate' name='ville' value={this.state.address.ville} onChange={this.onTodoChange} />
                        <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Ville</label>

                    </div>

                </div>
                <div className='modal-body mx-3'>

                    <div className='md-form mb-5'>
                        <input type='text' className='form-control validate' name='province' value={this.state.address.province} onChange={this.onTodoChange} />
                        <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Province</label>

                    </div>

                </div>
                <div className='modal-body mx-3'>

                    <div className='md-form mb-5'>
                        <input type='text' className='form-control validate' name='pays' value={this.state.address.pays} onChange={this.onTodoChange} />
                        <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Pays</label>

                    </div>

                </div>
                <div className='modal-body mx-3'>

                    <div className='md-form mb-5'>
                        <input type='number' className='form-control validate' name='numero_appt' value={this.state.address.numero_appt} onChange={this.onTodoChange} />
                        <label data-error='wrong' data-success='right' htmlFor='defaultForm-email'>Numero appartement</label>

                    </div>

                </div>

                <Button variant='btn btn-primary btn-lg mx-auto ' onClick={this.fileUpload}>Update </Button>
                <Button variant='btn btn-primary btn-lg' onClick={this.fileUpload}>Annuler </Button>
            </div>

        )
    }
}

export default UpdateProfile
