// import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
// import ConnectionPopUp from '../container/connection-container'
// import InscriptionPopUp from './popup-inscription'
// import { Link, withRouter } from 'react-router-dom'
import { login } from '../fonctions/UserFunctions'

import React, { Component } from 'react'
import InscriptionContainer from '../container/inscription-container'
import ModalContainer from '../container/modal-container'

export default class NavbarLinks extends Component {
    constructor (props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
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
            userName: this.state.userName,
            password: this.state.password
        }
        login(user).then(res => {
            if (res) {
                console.log('test', res)
                this.setState({
                    users: res
                })
                this.onHandleClose()

                console.log('test', this.state.users.utilisateur.nom)
                this.setState({ userName: this.state.users.utilisateur.nom })
            }
        })
        // this.register(user)
    }
    // }

    onHandleChangeName (e) {
        // this.setState({ [e.target.name]: e.target.value })
        this.setState({ userName: e.target.value })
    }

    onHandleChangePass (e) {
        // this.setState({ [e.target.name]: e.target.value })
        this.setState({ password: e.target.value })
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
                userName: this.state.userName,
                password: this.state.password
            }
            login(user).then(res => {
                if (res) {
                    console.log('test', res)
                    this.setState({
                        users: res
                    })
                    this.onHandleClose()

                    console.log('test', this.state.users.utilisateur.nom)
                    this.setState({ userName: this.state.users.utilisateur.nom })
                }
            })
        }
    }

    render () {
        // console.log(this.state.userName)
        const loginRegLink = (
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                    <a className='nav-link' onClick={this.handleShow}>Se connecter</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' onClick={this.handleShowInsc}> S'inscrire</a>
                </li>

            </ul>
        )
        const userLink = (
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                    <a className='nav-link'>{this.state.userName}</a>

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
                        <InscriptionContainer />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.handleCloseInsc}>
                            Annuler
                        </Button>
                        <Button variant='primary' onClick={this.onSubmit.bind(this)}>
                            Creer votre compte
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}
