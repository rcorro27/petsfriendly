// import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ConnectionPopUp from './popup-connection'
// import { Link, withRouter } from 'react-router-dom'
import { login } from '../fonctions/UserFunctions'

import React, { Component } from 'react'

export default class NavbarLinks extends Component {
    constructor (props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            show: false,
            user: []
        }
        this.onHandleChangeName = this.onHandleChangeName.bind(this)

        this.onHandleChangePass = this.onHandleChangePass.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.register = this.register.bind(this)
    }

    handleShow () {
        this.setState({
            show: true
        })
    }

    register (user) {
        // console.log(this.state.userName, this.state.passeword)
        if (user.userName === 'yahia' && user.password === 'benhaili') {
            console.log('Mot de passe bien enregistrer')
            localStorage.setItem('usertoken', user)
            console.log(localStorage.getItem('usertoken'))
        } else {
            console.log('Code Errome')
        }
    }

    handleClose () {
        this.setState({
            show: false
        })
    }

    onSubmit (e) {
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

                console.log('test', this.state.users)
            }
        })
        // this.register(user)
    }

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

    render () {
        const loginRegLink = (
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                    <a className='nav-link' onClick={this.handleShow}>Se connecter</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link'> S'inscrire</a>
                </li>

            </ul>
        )
        const userLink = (
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                    <a className='nav-link' onClick={this.logOut.bind(this)}>Se deconnecter</a>
                </li>

            </ul>
        )

        return (
            <div className='collapse navbar-collapse' id='navbarResponsive'>
                {localStorage.usertoken ? userLink : loginRegLink}
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Page Connexion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ConnectionPopUp getText={this.onHandleChangeName} getPass={this.onHandleChangePass} valueName={this.state.userName} valuePass={this.state.passsword} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.handleClose}>
                            Annuler
                        </Button>
                        <Button variant='primary' onClick={this.onSubmit.bind(this)}>
                            Se connecter
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}
