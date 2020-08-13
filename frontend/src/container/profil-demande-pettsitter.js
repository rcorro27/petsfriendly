import React, { Component } from 'react'

// import PetSitterInput from 'component/PetSitterInput'

class ProfilDemandePettSitter extends Component {
    render () {
        return (
            // AHMED CHAQUE ELEMENT JSX DOIT AVOIR UNE ELEMENT PARENT ( ce ca le div qui envelope tout le restes)
            // ligne 21 pas la bonne syntaxe
            <div>
                <div>
                    <h1 className='h1'>Profile Pet Sitter</h1>
                </div>
                <div className='rounded-circle'>
                    <img src='../src/img/caroussel/image1.jpeg' alt='Carlos' className='img-fluid rounded-circle w-25 p-3' />
                    <h2 className='h2'>Carlos</h2>
                    <h6 className='h6'>Secteur de Action</h6>
                    <input type='button' value='Contacter' />
                    <input type='button' value='Aimer' />

                </div>
                <div className='w-25 p-3'>
                    <h6>Services </h6>
                    <ul className='list-group'>
                        <li className='list-group-item'>service1</li>
                        <li className='list-group-item'>service2</li>
                        <li className='list-group-item'>service3</li>
                        <li className='list-group-item'>service4</li>
                        <li className='list-group-item'>service5</li>
                    </ul>
                </div>
                <div className='w-100 p-3'>
                    <h6>feedback</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </div>
                <div claddName='w-100 p-3'>
                    <h6>Geolocalitation</h6>
                    <iframe className='w-25 p-3' frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed' /><a href='https://www.mapsdirections.info/marcar-radio-circulo-mapa/'>Marcar radio en el mapa</a>
                </div>
                <form id='petSitterpopups'>
                    <p>Message</p>
                    <div className='texteArea'>
                        {/* <PetSitterInput
                            text='pettesitter'
                            type='TEXTAREA'
                            id='message'
                            name='message'
                            value='message'
                            rows='6'
                            cols='6'
                       /> */}
                    </div>
                </form>
                <button onClick={this.props.onHandleSaveOnClickRichard}>retour a la page developement</button>
            </div>
        )
    }
}
// tu ne exporte pas la bon classe!!! tu dois exporter la classe container dans ce cas la : FormInscription!!
export default ProfilDemandePettSitter
