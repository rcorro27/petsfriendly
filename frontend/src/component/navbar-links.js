
import { Button, Modal } from 'react-bootstrap'

import { login, register } from '../fonctions/UserFunctions'
import { Link } from 'react-router-dom'

import React, { Component } from 'react'
import InscriptionContainer from '../container/inscription-container'
import ModalContainer from '../container/modal-container'

export default class NavbarLinks extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id_role: 0,
            nom: '',
            prenom: '',
            age: 17,
            email: '',
            mot_de_passe: '',
            sexe: '',
            telephone: '',
            numero_rue: '',
            nom_rue: '',
            code_postal: '',
            ville: '',
            province: '',
            pays: '',
            numero_appt: '',
            show: false,
            showInscription: false,
            user: []
        }
        this.onHandleChangeName = this.onHandleChangeName.bind(this)

        this.onHandleChangePass = this.onHandleChangePass.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleShowInsc = this.handleShowInsc.bind(this)
        this.onHandleClose = this.onHandleClose.bind(this)
        this.handleCloseInsc = this.handleCloseInsc.bind(this)
        this.getValues = this.getValues.bind(this)
        this.onHandleChangeAndEnter = this.onHandleChangeAndEnter.bind(this)
    }

    handleShow () {
        this.setState({
            show: true
        })
    }

    handleShowInsc () {
        this.setState({
            showInscription: true
        })
    }

    onHandleClose () {
        this.setState({
            show: false
        })
    }

    handleCloseInsc () {
        this.setState({
            showInscription: false
        })
    }

    onSubmit (e) {
        // if (e.key === 'Enter') {
        e.preventDefault()

        const user = {
            userName: this.state.email,
            password: this.state.mot_de_passe
        }
        login(user).then(res => {
            if (res) {
                console.log('test', res)
                this.setState({
                    users: res
                })
                this.onHandleClose()

                console.log('test', this.state.users.utilisateur.nom)
                this.setState({ nom: this.state.users.utilisateur.nom })
            }
        })
        // this.register(user)
    }

    register (e) {
        // if (e.key === 'Enter') {
        e.preventDefault()

        const newUser = {
            id_role: this.state.id_role,
            nom: this.state.nom,
            prenom: this.state.prenom,
            age: this.state.age,
            email: this.state.email,
            mot_de_passe: this.state.mot_de_passe,
            sexe: this.state.sexe,
            telephone: this.state.telephone,
            numero_rue: this.state.numero_rue,
            nom_rue: this.state.nom_rue,
            code_postal: this.state.code_postal,
            ville: this.state.ville,
            province: this.state.province,
            pays: this.state.pays,
            numero_appt: this.state.numero_appt
        }
        console.log('new User', newUser)
    /*    register(newUser).then(res => {
            if (res) {
                console.log('test', res)
                this.setState({
                    users: res
                })
                this.onHandleClose()

                console.log('test', this.state.users.utilisateur.nom)
                this.setState({ nom: this.state.users.utilisateur.nom })
            }
        }) */
        // this.register(user)
    }
    // }

    onHandleChangeName (e) {
        // this.setState({ [e.target.name]: e.target.value })
        this.setState({ email: e.target.value })
    }

    onHandleChangePass (e) {
        // this.setState({ [e.target.name]: e.target.value })
        this.setState({ mot_de_passe: e.target.value })
    }

    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        console.log('disconnected')
        console.log(localStorage.getItem('usertoken'))
        window.location.reload(false)
    }

    onHandleChangeAndEnter (e) {
        if (e.key === 'Enter') {
            e.preventDefault()

            const user = {
                userName: this.state.email,
                password: this.state.mot_de_passe
            }
            login(user).then(res => {
                if (res) {
                    console.log('test', res)
                    this.setState({
                        users: res
                    })
                    this.onHandleClose()

                    console.log('Object', JSON.parse(localStorage.getItem('usertoken')))

                    this.setState({ nom: this.state.users.utilisateur.nom })
                }
            })
        }
    }

    getValues (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render () {
        // console.log(this.state.userName)
        const loginRegLink = (
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                    <Link to='/' className='nav-link' onClick={this.handleShow}>Se connecter</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' onClick={this.handleShowInsc}> S'inscrire</Link>
                </li>

            </ul>
        )
        const userLink = (
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                    <a className='navbar-brand' href='#'>
                        <img className='rounded-circle' src='src/img/avatar.jpg' width='30' height='30' />
                    </a>
                </li>

                <li className='nav-item active'>
                    <a className='nav-link'> {localStorage.usertoken ? this.state.nom : ''}</a>

                </li>
                <li className='nav-item active'>

                    <a className='nav-link' onClick={this.logOut.bind(this)}>Se deconnecter</a>
                </li>

            </ul>
        )

        return (
            <div className='collapse navbar-collapse' id='navbarResponsive'>
                {localStorage.usertoken ? userLink : loginRegLink}
                <ModalContainer
                    show={this.state.show}
                    HandleChangeAndEnter={this.onHandleChangeAndEnter} HandleChangePass={this.onHandleChangePass}
                    HandleChangeName={this.onHandleChangeName} handleClose={this.onHandleClose} onSubmitt={this.onSubmit.bind(this)}
                />

                <Modal show={this.state.showInscription} onHide={this.handleCloseInsc}>
                    <Modal.Header closeButton>
                        <Modal.Title>Page Inscription</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InscriptionContainer change={this.getValues} />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.handleCloseInsc}>
                            Annuler
                        </Button>
                        <Button variant='primary' onClick={this.register.bind(this)}>
                            Creer votre compte
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}
