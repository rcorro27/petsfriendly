import React from 'react'
//* import ImgComposant from 'img-composant'

/* Json {
"petsitter1" : {
"id": ,
"nom": ,
"prenom": ,
"age": ,
"sexe": ,
"id_adresse": ,
"telephone": ,
"secteur_action": ,
"url_photo": ,
}
"petsitter2" : {
"id": ,
"nom": ,
"prenom": ,
"age": ,
"sexe": ,
"id_adresse": ,
"telephone": ,
"secteur_action": ,
"url_photo": ,
}
} */

// EVENEMENT BUTTON A AJOTER LIGNE 36

const VignetteComponent = ({ urlPhoto, className, nom, secteurAction, onClickProfil, classInput, classInput2, onClickEnvoyer, textBoutonProfil, textBoutonEnvoyer, services }) => (

    <div className={className}>
        <img className='img-fluid img-thumbnail' src={urlPhoto} alt={urlPhoto} />
        <h2 className='mx-auto'>{nom}</h2>
        {console.log(services)}
        <ul>

            {services.map((infos, index) => <li key={index}> {infos.service}{''}{infos.price}{''}<i className='fas fa-dollar-sign' /></li>)}

        </ul>
        <p className='mx-auto'>{secteurAction}</p>
        <button type='button' onClick={onClickProfil} className={classInput}>{textBoutonProfil} </button>
        <button type='button' onClick={onClickEnvoyer} className={classInput2}>{textBoutonEnvoyer}</button>

    </div>

)

export default VignetteComponent
// {buttons.map((button, index) => <span key={index}><button onClick={button.handleOnClick}>{button.label}</button></span>)}
// far fa-heart
// fas fa-paper-plane
