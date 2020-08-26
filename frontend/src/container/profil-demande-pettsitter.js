import React, { Component } from 'react'
import InputComponent from 'component/input-component'
import ServiceDemandeComponent from '../component/services-demande-component'
import ListItemComponent from 'component/list-item-component'
import FeedBackCommentaire from '../component/feedback-commentaire-component'
import FactureDemandeComponent from '../component/facture-demande-component'
import { withRouter } from 'react-router-dom'
import '../css/demande.css'
// import PetSitterInput from 'component/PetSitterInput'
//commentire probleme push
class ProfilDemandePettSitter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recherche: false,
            resultat: [],
            idUser: '',
            services: []

        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        alert('Demande Envoyee')
        this.props.history.push('/')
    }

    render() {
        function PrixAvantTaxes(prix) {
            let prixAvantTaxes = 0
            prix.map((infoPrix, index) => {
                prixAvantTaxes = prixAvantTaxes + infoPrix.prix_service
                return prixAvantTaxes
            })
            return prixAvantTaxes
        }
        function TPS(prix) {
            const tps = PrixAvantTaxes(prix) * 5 / 100
            return tps
        }
        function TVQ(prix) {
            const tvq = PrixAvantTaxes(prix) * 9.975 / 100
            return tvq
        }
        function PrixAvecTaxes(prix) {
            const prixTotal = Math.ceil(PrixAvantTaxes(prix) + TVQ(prix) + TPS(prix))
            return prixTotal
        }

        const service = [
            {
                id: 1,
                description: 'Promenade',
                prix_service: 20
            },
            {
                id: 2,
                description: 'Garder Chez Vous',
                prix_service: 15
            },
            {
                id: 3,
                description: 'Garder Chez Pet Sitter',
                prix_service: 20
            }

        ]
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
                commentaire: 'Bonne sitter, excellent service , tres bonne attitude , je ferai encore affaire avec elle'
            }

        ]
        const facture = [
            'Total hors taxes :',
            'TPS : ',
            'TVQ : ',
            'TOTAL avec taxes :'

        ]

        console.log('taxes tps', TPS(service))
        console.log('taxes tvq', TVQ(service))
        console.log('Prix Total : ', PrixAvecTaxes(service))
        return (

            // AHMED CHAQUE ELEMENT JSX DOIT AVOIR UNE ELEMENT PARENT ( ce ca le div qui envelope tout le restes)
            // ligne 21 pas la bonne syntaxe
            <div className='demandewrapper'>
                <div>
                    <h1 className='h1 w-25 p-3 mx-auto'>Profil Pet Sitter</h1>
                </div>
                <div className='row m-5 bg-white border border-danger rounded shadow'>
                    <img src='../src/img/caroussel/image1.jpeg' alt='Carlos' className='img-fluid rounded-circle w-25 p-3' />
                    <div className='m-5 infoSitterWrapper'>
                        <h2 className='h2'>Carlos</h2>
                        <h3 className='h6'>Secteur d'action</h3>
                        <h6 className='h6'>Rating</h6>
                        <input type='button' value='Contacter' className='btn btn-success m-2 boutonPetsitter' />
                        <input type='button' value='Aimer' className='btn btn-danger m-2 boutonPetsitter' />
                    </div>

                </div>
                <div className='clearfix '>
                    <div className='m-5 w-25 p3 float-left border border-danger rounded shadow serviceBox'>
                        <h3 className='h3 w-25 p-3 mx-auto'><strong>Services</strong> </h3>
                        <ul className='list-group'>
                            {service.map((info, index) => <ServiceDemandeComponent key={index} classNameLi='list-group-item serviceBox' textLi={info.description} textPrice={info.prix_service} classIcone='fas fa-dollar-sign ' />)}
                        </ul>
                    </div>
                    <div className=' m-5 w-50 p-3 float-right border border-danger rounded shadow commentBox'>
                        <h1 className='w-25 p-3 mx-auto'><strong>Commentaires</strong></h1>
                        {feedback.map((info, index) => <FeedBackCommentaire nomProprietaire={info.nameProprietaire} dateCommentaire={info.dateCommentaire} commentaire={info.commentaire} key={index} divClass=' m-2 feedbackComment' />)}
                    </div>
                </div>

                <div className='border border-danger rounded shadow prixEtServiceWrapper'>

                    <h2 className=' h2 w-25 p-3 mx-auto'>Prix des services</h2>
                    <div>
                        <div className='float-left m-2 w-25 p-3'>
                            {facture.map((infoFacture, index) => <FactureDemandeComponent text={infoFacture} key={index} />)}

                        </div>
                        <div className='float-right m-2 w-25 p-3'>
                            <p><strong>{PrixAvantTaxes(service)}</strong></p>
                            <p>{TPS(service)}</p>
                            <p>{TVQ(service)}</p>
                            <p><strong>{PrixAvecTaxes(service)}</strong></p>
                            <input type='button' value='Envoyer Demande' className='btn btn-success' onClick={this.handleClick} />
                        </div>

                    </div>
                </div>
                <div id='divPlubicite2'>
                    <h1 className='w-50 p-3 mx-auto h1'>Des services sur mesure pour un animal d'exeption </h1>
                    <div className='row divAnnonce'>
                        <div className='col-lg-4 mx-auto border border-danger rounded serviceProposes' >
                            <ListItemComponent text='Faites garder votre animal à votre domicile ou à celui du Pet Sitter' className='fas fa-check' />
                            <ListItemComponent text='Partez à votre rendez-vous sans vous soucier de la promenade de votre chien' className='fas fa-check' />
                            <ListItemComponent text='Besoin de flexibilite? Choisissez les horaires et periodes qui vous conviennent' className='fas fa-check' />
                        </div>
                        <div className='col-lg-4 mx-auto border border-danger rounded serviceProposes'>
                            {/* METTRE UN ICONE DANS LAVANT DE LES LI POUR LA PUBLICITER */}
                            <ListItemComponent text='Tous les nouveaux gardiens passent une verification des antecedents de base' className='fas fa-check' />
                            <ListItemComponent text='Tous les gardiens fournissent un profil detaille et des informations personnelles ' className='fas fa-check' />
                            <ListItemComponent text='Tous les Pet Sitter sont agrees par notre equipe de specialistes chez Pets Friendly' className='fas fa-check' />
                        </div>
                    </div>
                </div>
                <div className='infolettreDiv mt-3'>
                    <h1 className='h1'>Laissez nous vous prevenir des nouveautes</h1>
                    <h6 className='h6'>Restez informe</h6>
                    <form>
                        <InputComponent classCss='form-group' classInput='form-control' textLabel='Entrez votre email' type='email' id='infolettre' name='infolettre' onChange={this.handleChange} />
                        <InputComponent classInput='btn btn-outline-danger' type='submit' id='infolettreButton' name='Envoyer ' value='Envoyer' />
                    </form>
                </div>
            </div>
        )
    }
}
// tu ne exporte pas la bon classe!!! tu dois exporter la classe container dans ce cas la : FormInscription!!
export default withRouter(ProfilDemandePettSitter)
    < div >
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

                    </div >
                </div >
            </div >
        )
    }
}

export default withRouter(ProfilDemandePettSitter)
