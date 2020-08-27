import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ConnectionPopUp from '../container/connection-container'
import { login } from '../fonctions/UserFunctions'
import { withRouter } from 'react-router-dom'

class ModalCnxContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            //  inputs: [],
            isPasswordShown: false,
            show: false,
            email: '',
            mot_de_passe: '',
            users: []

        }
        this.handletogglePasswordVisiblity = this.handletogglePasswordVisiblity.bind(this)
        this.onHandleChangeName = this.onHandleChangeName.bind(this)

        this.onHandleChangePass = this.onHandleChangePass.bind(this)
        this.handleShow = this.handleShow.bind(this)

        this.onHandleClose = this.onHandleClose.bind(this)

        this.onHandleChangeAndEnter = this.onHandleChangeAndEnter.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onHandleClose = this.onHandleClose.bind(this)
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
        // if (e.key === 'Enter') {
        e.preventDefault()

        const user = {
            userName: this.state.email,
            password: this.state.mot_de_passe
        }
        login(user).then(res => {
            if (res) {
                console.log('email', res.utilisateur.id_role)
                this.setState({
                    users: res
                })
                //  this.props.history.push('/admin')

                if (res.utilisateur.id_role === 1) {
                    //  <Redirect to='/admin' />
                    // history.push('/admin')
                    this.props.history.push('/admin')
                }
                this.props.onHandleClose()

                console.log('test', this.state.users.utilisateur.nom)
                this.setState({ userName: this.state.users.utilisateur.nom })
            }
        })
        // this.register(user)
    }

    render () {
        return (
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

        )
    }
}
export default withRouter(ModalCnxContainer)
