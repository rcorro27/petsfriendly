import React, { Component } from 'react'
import ServiceDemandeComponent from '../component/services-demande-component'
import FeedBackCommentaire from '../component/feedback-commentaire-component'
import FactureDemandeComponent from '../component/facture-demande-component'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
// import PetSitterInput from 'component/PetSitterInput'

class ProfilDemandePettSitter extends Component {
    constructor (props) {
        super(props)

        this.state = {
            recherche: false,
            resultat: [],
            prixSitter: [],
            service: JSON.parse(localStorage.getItem('serviceRecherche')),
            servicesTotal: JSON.parse(localStorage.getItem('servicestotal')),
            dateDebut: JSON.parse(localStorage.getItem('dateDebut')),
            dateFin: JSON.parse(localStorage.getItem('dateFin')),
            sitter: JSON.parse(localStorage.getItem('sitter')),
            proprietaire: JSON.parse(localStorage.getItem('usertoken'))

        }
        this.handleClick = this.handleClick.bind(this)
        this.setProprietaire = this.setProprietaire.bind(this)
        this.unsetProprietaire = this.unsetProprietaire(this)
    }

    setProprietaire () {
        this.setState({ proprietaire: JSON.parse(localStorage.getItem('usertoken')) })
    }

    unsetProprietaire () {
        this.setState({ proprietaire: false })
    }

    handleClick () {
        this.props.history.push('/payment')
        /*  return axios
            .post('https://pets-friendly.herokuapp.com/contrats/creation', {

                utilisateur: {
                    id_proprietaire: this.state.proprietaire.utilisateur.id,
                    id_petsitter: this.state.sitter.id
                },
                contrat: {
                    date_debut: this.state.dateDebut,
                    date_fin: this.state.dateFin
                },
                service: this.state.service,
                promotion: {
                    id_promotion: 1
                }

            })
            .then(response => {
                if (Object.keys(response.data).length === 0) {
                    alert('Demande Envoyee')
                    this.props.history.push('/')
                } else {
                    console.log('demande pas envoyer')
                }
            })
            .catch(err => {
                console.log('erreur recherche:', err)
            }) */
    }

    handleSubmit () {

    }

    render () {
        function niveauPetSitter (niveau) {
            let niveauSitter = ''
            if (niveau > 0 && niveau < 50) {
                niveauSitter = 'Debutant'
            } else if (niveau >= 50 && niveau < 100) {
                niveauSitter = 'Normal'
            } else if (niveau >= 100 && niveau < 200) {
                niveauSitter = 'Intermediare'
            } else if (niveau >= 200 && niveau < 400) {
                niveauSitter = 'Proffesionel'
            } else if (niveau >= 400) {
                niveauSitter = 'Expert'
            }
            return niveauSitter
        }
        const sitter = JSON.parse(localStorage.getItem('sitter'))
        const serviceTotal = JSON.parse(localStorage.getItem('servicestotal'))
        const user = JSON.parse(localStorage.getItem('usertoken'))

        function PrixAvantTaxes (prix) {
            let prixAvantTaxes = 0
            prix.map((infoPrix, index) => {
                console.log(prix)
                console.log(serviceTotal[infoPrix - 1].prix_service)
                prixAvantTaxes = prixAvantTaxes + serviceTotal[infoPrix - 1].prix_service
                return prixAvantTaxes
            })
            return prixAvantTaxes
        }
        function TPS (prix) {
            const tps = PrixAvantTaxes(prix) * 5 / 100
            return tps
        }
        function TVQ (prix) {
            const tvq = PrixAvantTaxes(prix) * 9.975 / 100
            return tvq
        }
        function PrixAvecTaxes (prix) {
            const prixTotal = Math.ceil(PrixAvantTaxes(prix) + TVQ(prix) + TPS(prix))
            return prixTotal
        }
        const feedback = [
            {
                nameProprietaire: 'Carlos',
                dateCommentaire: '21/05/2020',
                commentaire: 'Bonne sitter, excellent service je la recommande'
            },
            {
                nameProprietaire: 'Maria',
                dateCommentaire: '21/08/2019',
                commentaire: 'Bonne sitter, excellent service je la recommande. Elle a vraiment bien pris soin de notre chat '
            },
            {
                nameProprietaire: 'Ricardo',
                dateCommentaire: '21/04/2018',
                commentaire: 'Bonne sitter, mais mauvaise attitude'
            },
            {
                nameProprietaire: 'Stefanie',
                dateCommentaire: '21/05/2020',
                commentaire: 'Bonne sitter, excellent service , tres  bonne attitude , je ferai encore affaire avec elle'
            }

        ]
        const facture = [
            'Total hors taxes :',
            'TPS : ',
            'TVQ : ',
            'TOTAL avec taxes :'

        ]
        console.log('sitter', this.state)
        console.log('service', JSON.parse(localStorage.getItem('serviceRecherche')))

        return (

            <div>

                <div>
                    <h1 className='h1 w-25 p-3 mx-auto'>Demande Service </h1>
                </div>
                <div className='row m-5 bg-white border border-danger rounded shadow'>
                    <img src={sitter.url_photo} alt={sitter.nom} className='img-fluid rounded-circle w-25 p-3' />
                    <div className='m-5'>
                        <h2 className='h2'>{sitter.nom}</h2>
                        <h3 className='h6'>{sitter.secteur_action}</h3>
                        <h6 className='h6'>{niveauPetSitter(sitter.rating)}</h6>
                    </div>
                    <div className='m-5'>
                        <input type='button' value='Contacter' className='btn btn-success m-2' />
                        <input type='button' value='Aimer' className='btn btn-danger m-2' />
                    </div>
                </div>
                <div className='clearfix '>
                    <div className='m-5 w-25 p3 float-left bg-white border border-danger rounded shadow '>
                        <h3 className='h3 w-25 p-3 mx-auto'><strong>Services</strong> </h3>
                        <ul className='list-group'>
                            <ServiceDemandeComponent classNameLi='list-group-item' servicesTotal={this.state.servicesTotal} servicesSitter={this.state.service} classIcone='fas fa-dollar-sign' />
                        </ul>
                    </div>
                    <div className=' m-5 w-50 p-3 float-right border border-danger rounded shadow'>
                        <h1 className='w-25 p-3 mx-auto'><strong>Commentaires</strong></h1>
                        {feedback.map((info, index) => <FeedBackCommentaire nomProprietaire={info.nameProprietaire} dateCommentaire={info.dateCommentaire} commentaire={info.commentaire} key={index} divClass=' m-2 border bg-white border-danger rounded' />)}
                    </div>
                </div>

                <div className=' w-100 p-5 float-right border border-danger rounded bg-white  shadow'>

                    <h2 className=' h2 w-25 p-3 mx-auto'>Prix des services</h2>
                    <div>
                        <div className='float-left m-2 w-25 p-3'>
                            {facture.map((infoFacture, index) => <FactureDemandeComponent text={infoFacture} key={index} />)}

                        </div>
                        <div className='float-right m-2 w-25 p-3'>
                            <p><strong>{PrixAvantTaxes(this.state.service)}</strong></p>
                            <p>{TPS(this.state.service)}</p>
                            <p>{TVQ(this.state.service)}</p>
                            <p><strong>{PrixAvecTaxes(this.state.service)}</strong></p>
                            <Link to='/payment'> <input type='button' value='Envoyer Demande' className='btn btn-success' /* onClick={this.handleClick} */ /></Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProfilDemandePettSitter)
