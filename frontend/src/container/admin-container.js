import React, { Component } from 'react'
import axios from 'axios'

import TdComposant from '../component/td-composant'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { withRouter } from 'react-router-dom'

class AdminContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isUserAdmin: false,
            petSitters: []
        }
        this.handleChangeSinglePost = this.handleChangeSinglePost.bind(this)
    }

    componentWillMount () {
        if (localStorage.getItem('usertoken') && JSON.parse(localStorage.getItem('usertoken')).utilisateur.id_role === 3) {
            axios.get('https://pets-friendly.herokuapp.com/utilisateurs/recuperation/petsitters/tout')
                .then(response => {
                    console.log('res', response)
                    this.setState({
                        petSitters: response.data
                    })
                })
        } else {
            this.props.history.push('/')
        }
    }

    checked () {
        this.setState({ isUserAdmin: !this.state.isUserAdmin })
        console.log('isUserAdmin1', this.state.isUserAdmin)
    }

    handleChangeSinglePost (id) {
        // console.log('value>>>', value)
        console.log('id>>>', id)
        return axios
            .put(`https://pets-friendly.herokuapp.com/utilisateurs/validation/petsitter/${id}`)
            .then(response => {
                console.log('Bien Modifier')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render () {
        // console.log('localStorage', JSON.parse(localStorage.getItem('usertoken')).utilisateur.id_role)
        //  console.log('isUserAdmin', this.state.isUserAdmin)
        return (
            <div className='container'>
                <h1>Administration </h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nom .</th>
                            <th>Prenom .</th>
                            <th>Email</th>
                            <th>Etat de compte .</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.petSitters.map(petSitter => (

                            <TdComposant
                                nom={petSitter.nom} email={petSitter.email}
                                prenom={petSitter.prenom}
                                etatCompte={petSitter.est_valide
                                    ? <BootstrapSwitchButton onlabel='active' offlabel='desactive' width={75} height={20} checked onChange={e => this.handleChangeSinglePost(petSitter.id)} size='sm' />
                                    : <BootstrapSwitchButton onlabel='active' offlabel='desactive' width={75} height={20} checked={false} onChange={e => this.handleChangeSinglePost(petSitter.id)} size='sm' />}
                                key={petSitter.id}
                            />
                        ))}

                    </tbody>
                </table>
            </div>

        )
    }
}
export default withRouter(AdminContainer)
