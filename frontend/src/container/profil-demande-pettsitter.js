import React, { Component } from 'react'

// import PetSitterInput from 'component/PetSitterInput'

class ProfilDemandePettSitter extends Component {
    render () {
        return (
            // AHMED CHAQUE ELEMENT JSX DOIT AVOIR UNE ELEMENT PARENT ( ce ca le div qui envelope tout le restes)
            // ligne 21 pas la bonne syntaxe
            <div>
                <div>
                    <h1 className='h1 w-25 p-3 mx-auto'>Profile Pet Sitter</h1>
                </div>
                <div className='row m-5 bg-white border border-danger rounded shadow'>
                    <img src='../src/img/caroussel/image1.jpeg' alt='Carlos' className='img-fluid rounded-circle w-25 p-3' />
                    <div className='m-5'>
                        <h2 className='h2'>Carlos</h2>
                        <h3 className='h6'>Secteur de Action</h3>
                        <h6 className='h6'>Rating</h6>
                    </div>
                    <div className='m-5'>
                        <input type='button' value='Contacter' className='btn btn-success m-2' />
                        <input type='button' value='Aimer' className='btn btn-danger m-2' />
                    </div>
                </div>
                <div className='clearfix '>
                    <div className='m-5 w-25 p3 float-left bg-white border border-danger rounded shadow '>
                        <h6 className='h6 w-25 p-3 mx-auto'>Services </h6>
                        <ul className='list-group'>
                            <li className='list-group-item'>service1</li>
                            <li className='list-group-item'>service2</li>
                            <li className='list-group-item'>service3</li>
                            <li className='list-group-item'>service4</li>
                            <li className='list-group-item'>service5</li>
                        </ul>
                    </div>
                    <div className=' m-5 w-50 p-3 float-right border border-danger rounded shadow'>
                        <h1 className='w-25 p-3 mx-auto'>feedback</h1>
                        <div className=' m-2 border bg-white border-danger rounded'>
                            <h3>Nom PROPRIETAIRE</h3>
                            <h4>Date de commentaire</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                        </div>
                        <div className='m-2 border bg-white border-danger rounded'>
                            <h3>Nom PROPRIETAIRE</h3>
                            <h4>Date de commentaire</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                        </div>
                        <div className=' m-2 border bg-white border-danger rounded'>
                            <h6>Nom PROPRIETAIRE</h6>
                            <h4>Date de commentaire</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                        </div>
                        <div className=' m-2 border bg-white border-danger rounded'>
                            <h6>Nom PROPRIETAIRE</h6>
                            <h4>Date de commentaire</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                        </div>
                    </div>

                </div>
                <div className='w-100 p-3 float-left'>
                    <h6>Geolocalitation</h6>
                    <iframe className='w-25 p-3' frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed' /><a href='https://www.mapsdirections.info/marcar-radio-circulo-mapa/'>Marcar radio en el mapa</a>
                </div>

                <button onClick={this.props.onHandleSaveOnClickRichard}>retour a la page developement</button>
            </div>
        )
    }
}
// tu ne exporte pas la bon classe!!! tu dois exporter la classe container dans ce cas la : FormInscription!!
export default ProfilDemandePettSitter
