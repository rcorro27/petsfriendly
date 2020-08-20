import React, { Component } from 'react'
import ServiceDemandeComponent from '../component/services-demande-component'
import FeedBackCommentaire from '../component/feedback-commentaire-component'
import FactureDemandeComponent from '../component/facture-demande-component'
import axios from 'axios'
// import PetSitterInput from 'component/PetSitterInput'

class ProfilDemandePettSitter extends Component {
    constructor (props) {
        super(props)

        this.state = {
            recherche: false,
            resultat: [],
            prixSitter: [],
            servicesTotal: []

        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        alert('click accepter')
            .get('https://pets-friendly.herokuapp.com/services/recuperation/tout')
        // .then(response => console.log(response.data))
            .then(response => {
                const service = []
                response.data.map((info, index) => service.push(info))
                console.log(service)
                this.setState({ servicesTotal: service })
            // event.preventDefault()
            })
            .catch(err => {
                console.log('erreur recherche:', err)
            })
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
        const service = JSON.parse(localStorage.getItem('servicestotal'))
        function PrixAvantTaxes (prix) {
            let prixAvantTaxes = 0
            prix.map((infoPrix, index) => {
                prixAvantTaxes = prixAvantTaxes + service[infoPrix - 1].prix_service
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
                commentaire: 'Bonne sitter, excelent service je le recommende'
            },
            {
                nameProprietaire: 'Maria',
                dateCommentaire: '21/08/2019',
                commentaire: 'Bonne sitter, excelent service je le recommende, il a pris vraiment soins de notre chat '
            },
            {
                nameProprietaire: 'Ricardo',
                dateCommentaire: '21/04/2018',
                commentaire: 'Bonne sitter, excelent service , mauvais actitud '
            },
            {
                nameProprietaire: 'Stefanie',
                dateCommentaire: '21/05/2020',
                commentaire: 'Bonne sitter, excelent service , tres  bonne actitud , je le prendais encore une fois  '
            }

        ]
        const facture = [
            'Total hors taxes :',
            'TPS : ',
            'TVQ : ',
            'TOTAL avec taxes :'

        ]
        console.log(sitter)
        console.log(this.state.servicesTotal)
        console.log('services total : ', JSON.parse(localStorage.getItem('servicestotal')))
        return (
            <div>
                <div>
                    <h1 className='h1 w-25 p-3 mx-auto'>Demande services sitter </h1>
                </div>
                <div className='row m-5 bg-white border border-danger rounded shadow'>
                    <img src='../src/img/caroussel/image1.jpeg' alt='Carlos' className='img-fluid rounded-circle w-25 p-3' />
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
                            <ServiceDemandeComponent classNameLi='list-group-item' servicesTotal={service} servicesSitter={sitter.services} classIcone='fas fa-dollar-sign' />
                        </ul>
                    </div>
                    <div className=' m-5 w-50 p-3 float-right border border-danger rounded shadow'>
                        <h1 className='w-25 p-3 mx-auto'><strong>Feedback</strong></h1>
                        {feedback.map((info, index) => <FeedBackCommentaire nomProprietaire={info.nameProprietaire} dateCommentaire={info.dateCommentaire} commentaire={info.commentaire} key={index} divClass=' m-2 border bg-white border-danger rounded' />)}
                    </div>
                </div>

                <div className=' m-5 w-50 p-3 float-right border border-danger rounded bg-white  shadow'>

                    <h2 className=' h2 w-25 p-3 mx-auto'>Prix des services</h2>
                    <div>
                        <div className='float-left m-2 w-25 p-3'>
                            {facture.map((infoFacture, index) => <FactureDemandeComponent text={infoFacture} key={index} />)}

                        </div>
                        <div className='float-right m-2 w-25 p-3'>
                            <p><strong>{PrixAvantTaxes(sitter.services)}</strong></p>
                            <p>{TPS(sitter.services)}</p>
                            <p>{TVQ(sitter.services)}</p>
                            <p><strong>{PrixAvecTaxes(sitter.services)}</strong></p>
                            <input type='button' value='Envoyer Demande' className='btn btn-success' onClick={this.handleClick} />
                        </div>

                    </div>
                </div>

                <button onClick={this.props.onHandleSaveOnClickRichard}>retour a la page developement</button>
            </div>
        )
    }
}

export default ProfilDemandePettSitter
