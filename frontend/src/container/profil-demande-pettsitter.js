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
    }

    componentDidMount () {
        return axios
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

    render () {
        const sitter = JSON.parse(localStorage.getItem('sitter'))
        // const priceTotal = 0
        // const price = sitter.services.map((price, index) => priceTotal + service[price - 1].prix_service)
        /* function name () {
            const priceTotalSansTaxe = 0
            sitter.services.map((info, index) => priceTotalSansTaxe + service[info - 1].prix_service)
            return priceTotalSansTaxe
        } */
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

        const service = JSON.parse(localStorage.getItem('servicestotal'))
        const feedback = [
            {
                nameProprietaire: 'Carlos',
                dateCommentaire: '21/05/2020',
                commentaire: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
            },
            {
                nameProprietaire: 'Maria',
                dateCommentaire: '21/08/2019',
                commentaire: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
            },
            {
                nameProprietaire: 'Ricardo',
                dateCommentaire: '21/04/2018',
                commentaire: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
            },
            {
                nameProprietaire: 'Stefanie',
                dateCommentaire: '21/05/2020',
                commentaire: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
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
                        <h6 className='h6'>{sitter.rating}</h6>
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
                            <input type='button' value='Envoyer Demande' className='btn btn-success' />
                        </div>

                    </div>
                </div>

                <button onClick={this.props.onHandleSaveOnClickRichard}>retour a la page developement</button>
            </div>
        )
    }
}
// tu ne exporte pas la bon classe!!! tu dois exporter la classe container dans ce cas la : FormInscription!!
export default ProfilDemandePettSitter
