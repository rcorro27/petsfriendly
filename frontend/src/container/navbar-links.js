
import { Button, Modal } from 'react-bootstrap'

import { login, register } from '../fonctions/UserFunctions'

import React, { Component } from 'react'
import InscriptionContainer from './inscription-container'
import InscriptionAdressContainer from './adress-inscription-container'
import QuestionValidation from './qst-validation'
import ModalCnxContainer from './modal-cnx-container'
import { Link, withRouter } from 'react-router-dom'

class NavbarLinks extends Component {
    constructor (props) {
        super(props)
        this.state = {
            step: 1,
            qs1: '',
            qs2: '',
            qs3: '',
            qs4: '',
            qs5: '',

            id_role: 0,
            nom: '',
            prenom: '',
            age: '',
            email: '',
            mot_de_passe: '',
            sexe: 'if',
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
            user: [],
            newUser: []
        }
        this.onHandleChangeName = this.onHandleChangeName.bind(this)

        this.onHandleChangePass = this.onHandleChangePass.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleShowInsc = this.handleShowInsc.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleCloseInsc = this.handleCloseInsc.bind(this)
        this.getValues = this.getValues.bind(this)
        this.handleGetValuesRadio = this.handleGetValuesRadio.bind(this)
        this.onHandleChangeAndEnter = this.onHandleChangeAndEnter.bind(this)
        this.showStep = this.showStep.bind(this)
        this.nextStep = this.nextStep.bind(this)
        this.prevStep = this.prevStep.bind(this)
    }

    onSubmitRegister (e) {
        this.handleCloseInsc()
        console.log('new User', this.state)
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
        register(newUser).then(res => {
            if (res) {
                alert(' Bien Ajouter')
                console.log('test', res)
                this.setState({
                    users: res
                })
                this.handleCloseInsc()

                console.log('test', this.state.users.utilisateur.nom)
                this.setState({ userName: this.state.users.utilisateur.nom })
            }
        })
    }

    nextStep (e) {
        console.log('step', this.state.step)
        e.preventDefault()
        this.setState({
            step: this.state.step + 1
        })
    }

    prevStep (e) {
        const { step } = this.state
        e.preventDefault()
        this.setState({
            step: step - 1
        })
    }

    showStep () {
        if (this.state.step === 1) {
            return (
                <InscriptionContainer
                    onChangeRadio={this.handleGetValuesRadio}
                    change={this.getValues}
                    handlenext={this.nextStep}
                />
            )
        }
        if (this.state.step === 2) {
            return (
                <InscriptionAdressContainer
                    change={this.getValues}
                    handlenext={this.nextStep}
                    handleback={this.prevStep}
                />
            )
        }
        if (this.state.step === 3) {
            return (

                <QuestionValidation
                    change={this.getValues}

                    handleback={this.prevStep}
                />

            )
        }
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

    handleClose () {
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
        console.log('email', this.state.utilisateur)
        e.preventDefault()

        const user = {
            userName: this.state.email,
            password: this.state.mot_de_passe
        }
        login(user).then(res => {
            if (res) {
                console.log('Email')
                this.setState({
                    users: res
                })
                this.handleClose()

                console.log('test', this.state.users.utilisateur.nom)
                this.setState({ userName: this.state.users.utilisateur.nom })
            }
        })
    }

    onHandleChangeName (e) {
        this.setState({ email: e.target.value })
    }

    onHandleChangePass (e) {
        this.setState({ mot_de_passe: e.target.value })
    }

    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        console.log('disconnected')
        console.log(localStorage.getItem('usertoken'))
        this.props.history.push('/')
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
                    console.log('test', res.utilisateur.id_role)
                    this.setState({
                        users: res
                    })
                    if (res.utilisateur.id_role === 3) {
                        this.props.history.push('/admin')
                    }
                    this.handleClose()

                    this.setState({ userName: this.state.users.utilisateur.nom })
                }
            })
        }
    }

    getValues (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleGetValuesRadio (e) {
        if (e.target.name === 'sexe') {
            console.log('sexe', e.target.value)
            this.setState({ sexe: e.target.value })
        } else if (e.target.name === 'id_role') { this.setState({ id_role: e.target.value }) }
    }

    render () {
        const loginRegLink = (
            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item active'>
                        <a className='nav-link' onClick={this.handleShow}>Se connecter</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' onClick={this.handleShowInsc}> S'inscrire</a>
                    </li>

                </ul>
            </div>
        )
        const userLink = (
            <div className='collapse navbar-collapse' id='navbarResponsive'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item active'>
                        <a className='navbar-brand' href='#'>
                            <img className='rounded-circle' src='src/img/avatar.jpg' width='30' height='30' />
                        </a>
                    </li>

                    <li className='nav-item active'>
                        <Link to='/profil' className='nav-link'> {localStorage.usertoken ? JSON.parse(localStorage.getItem('usertoken')).utilisateur.nom : ''}</Link>

                    </li>
                    <li className='nav-item active'>
                        <Link to='/search' className='nav-link'>
                            chercher
                        </Link>

                    </li>
                    <li className='nav-item active'>

                        <a className='nav-link' onClick={this.logOut.bind(this)}>Se deconnecter</a>
                    </li>

                </ul>
            </div>
        )

        return (
            <div className='collapse navbar-collapse' id='navbarResponsive'>
                {localStorage.usertoken ? userLink : loginRegLink}
                <ModalCnxContainer show={this.state.show} onHandleClose={this.handleClose} />
                <Modal show={this.state.showInscription} onHide={this.handleCloseInsc}>
                    <Modal.Header closeButton>
                        <Modal.Title>Page Inscription</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.showStep()}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.handleCloseInsc}>
                            Annuler
                        </Button>
                        <Button variant='primary' onClick={this.onSubmitRegister.bind(this)}>
                            Creer votre compte
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}
export default withRouter(NavbarLinks)
