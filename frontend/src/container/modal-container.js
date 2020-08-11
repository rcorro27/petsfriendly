import React, { Component } from 'react'

import { Button, Modal } from 'react-bootstrap'
import ConnectionPopUp from '../container/connection-container'

class ModalContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            inputs: []
        }
    }

    render () {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Page Connexion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ConnectionPopUp FonctionEntrer={this.props.HandleChangeAndEnter} getPass={this.props.HandleChangePass} getEmail={this.props.HandleChangeName} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={this.props.handleClose}>
                        Annuler
                    </Button>
                    <Button variant='primary' onClick={this.props.onSubmitt}>
                        Se connecter
                    </Button>
                </Modal.Footer>
            </Modal>

        )
    }
}
export default ModalContainer
