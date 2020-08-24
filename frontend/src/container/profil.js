import React, { Component } from 'react'
import jwtdecode from 'jwt-decode'

class Profile extends Component {
    constructor () {
        super()
        this.state = {
            nom: '',
            prenom: '',
            age: '',
            email: '',
            sexe: '',
            telephone: '',
            est_valide: false,
            errors: {}
        }
    }

    componentDidMount () {
        // const token = localStorage.usertoken
        // const decoded = jwtdecode(token)
        if (localStorage.getItem('usertoken')) {
            this.setState({
                nom: JSON.parse(localStorage.getItem('usertoken')).utilisateur.nom,
                prenom: JSON.parse(localStorage.getItem('usertoken')).utilisateur.prenom,
                age: JSON.parse(localStorage.getItem('usertoken')).utilisateur.age,
                sexe: JSON.parse(localStorage.getItem('usertoken')).utilisateur.sexe,
                telephone: JSON.parse(localStorage.getItem('usertoken')).utilisateur.telephone,
                est_valide: JSON.parse(localStorage.getItem('usertoken')).utilisateur.est_valide,
                email: JSON.parse(localStorage.getItem('usertoken')).utilisateur.email
            })
        } else {
            this.props.history.push('/')
        }
    }

    render () {
        console.log('state', this.state)
        return (
            <div className='container'>
                <div className='jumbotron mt-5'>
                    <div className='col-sm-8 mx-auto'>
                        {this.state.est_valide ? <h3 className='text-center text-success '> Votre profile est active vous pouvez acceder aux services</h3> : <h3 className='text-center text-danger '>Votre profil n'est pas encore valide , vous n'avez pas l'acces a nos services</h3>}
                        <h1 className='text-center'>PROFILE </h1>
                    </div>
                    <table className='table col-md-6 mx-auto'>
                        <tbody>
                            <tr>
                                <td>Fist Name</td>
                                <td>{this.state.nom}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.prenom}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>{this.state.age}</td>
                            </tr>
                            <tr>
                                <td>Sexe</td>
                                <td>{this.state.sexe}</td>
                            </tr>
                            <tr>
                                <td>Telephone</td>
                                <td>{this.state.telephone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile
