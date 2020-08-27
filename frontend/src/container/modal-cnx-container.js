import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ConnectionPopUp from '../container/connection-container'
import { login } from '../fonctions/UserFunctions'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ModalMessage from 'component/modal'

class ModalCnxContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            //  inputs: [],
            isPasswordShown: false,
            show: false,
            email: '',
            mot_de_passe: '',
            users: [],
            message: '',
            showmodal: false

        }
        this.handletogglePasswordVisiblity = this.handletogglePasswordVisiblity.bind(this)
        this.onHandleChangeName = this.onHandleChangeName.bind(this)

        this.onHandleChangePass = this.onHandleChangePass.bind(this)
        this.handleShow = this.handleShow.bind(this)

        this.onHandleClose = this.onHandleClose.bind(this)

        this.onHandleChangeAndEnter = this.onHandleChangeAndEnter.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onHandleClose = this.onHandleClose.bind(this)
        this.message = this.message.bind(this)
        this.showModal = this.showModal.bind(this)
        this.onHandleonCloseModal = this.onHandleonCloseModal.bind(this)
    }

    showModal () {
        this.setState({ showmodal: true })
    };

    onHandleonCloseModal () {
        localStorage.removeItem('usertoken')
        this.setState({ showmodal: false })
    };

    message (params) {
        if (params === 200) {
            this.state.message = 'COmpte pas active'
        } if (params === 300) {
            this.state.message = 'COmpte pas valider'
        } if (params === 400) {
            this.state.message = 'Utilisateur ou mote de passe errone'
        } return this.state.message
    }

    onHandleClose () {
        this.setState({
            show: false
        })
    }

    handletogglePasswordVisiblity () {
        const { isPasswordShown } = this.state
        this.setState({ isPasswordShown: !isPasswordShown })
    };

    handleShow () {
        this.setState({
            show: true
        })
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
                    if (res.utilisateur.id_role === 1) {
                        //  <Redirect to='/admin' />
                        // history.push('/admin')
                        this.props.history.push('/admin')
                    }
                    this.props.onHandleClose()

                    // console.log('Object', JSON.parse(localStorage.getItem('usertoken')))

                    this.setState({ userName: this.state.users.utilisateur.nom })
                }
            })
        }
    }

    onHandleChangeName (e) {
        this.setState({ email: e.target.value })
        // this.setState({ utilisateur: { email: e.target.value } })
    }

    onHandleChangePass (e) {
        this.setState({ mot_de_passe: e.target.value })
        // this.setState({ utilisateur: { mot_de_passe: e.target.value } })
    }

    onSubmit (e) {
        return axios
            .post('https://pets-friendly.herokuapp.com/utilisateurs/connexion', {
                email: this.state.userName,
                mot_de_passe: this.state.password
            })
            .then(response => {
                if (response.data.erreur) {
                    this.message(response.data.erreur)
                    this.props.onHandleClose()
                    this.showModal()

                    // console.log(response.data.erreur)
                } else {
                    localStorage.setItem('usertoken', JSON.stringify(response.data))
                }
                // console.log(response.data)
                // console.log(localStorage.getItem('usertoken'))

                return response.data
            })
            .catch(err => {
                console.log(err)
            })
        // if (e.key === 'Enter') {
        // e.preventDefault()

        /* const user = {
            userName: this.state.email,
            password: this.state.mot_de_passe
        }
        login(user).then(res => {
            if (res) { */
        //   console.log('email', res.utilisateur.id_role)
        // this.setState({
        //   users: res
        // })
        //  this.props.history.push('/admin')

        // if (res.utilisateur.id_role === 1) {
        //  <Redirect to='/admin' />
        // history.push('/admin')
        //  this.props.history.push('/admin')
        // }
        // this.props.onHandleClose()

        /*   console.log('test', this.state.users.utilisateur.nom)
                this.setState({ userName: this.state.users.utilisateur.nom })
            }
        }) */
        // this.register(user)
    }

    render () {
        console.log('this', this.state)
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.onHandleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Page Connexion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ConnectionPopUp FonctionEntrer={this.onHandleChangeAndEnter} getPass={this.onHandleChangePass} getEmail={this.onHandleChangeName} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.onHandleClose}>
                            Annuler
                        </Button>
                        <Button variant='primary' onClick={this.onSubmit}>
                            Se connecter
                        </Button>
                    </Modal.Footer>
                </Modal>
                <ModalMessage onHandleonCloseModal={this.onHandleonCloseModal} show={this.state.showmodal}>{this.state.message}</ModalMessage>
            </>

        )
    }
}
export default withRouter(ModalCnxContainer)
