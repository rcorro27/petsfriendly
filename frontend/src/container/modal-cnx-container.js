import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ConnectionPopUp from '../container/connection-container'

class ModalCnxContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            //  inputs: [],
            isPasswordShown: false

        }
        this.handletogglePasswordVisiblity = this.handletogglePasswordVisiblity.bind(this)
    }

    handletogglePasswordVisiblity () {
        const { isPasswordShown } = this.state
        this.setState({ isPasswordShown: !isPasswordShown })
    };

    render () {
        return (
            <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Page Connexion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ConnectionPopUp FonctionEntrer={this.props.onHandleChangeAndEnter} getPass={this.props.onHandleChangePass} getEmail={this.props.onHandleChangeName} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={this.props.handleClose}>
                        Annuler
                    </Button>
                    <Button variant='primary' onClick={this.props.onSubmit}>
                        Se connecter
                    </Button>
                </Modal.Footer>
            </Modal>

        )
    }
}
export default ModalCnxContainer
