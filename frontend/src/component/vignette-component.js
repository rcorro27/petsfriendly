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

const VignetteComponent = ({ urlPhoto, className, name, secteurAction, onClick, classInput, classInput2 }) => (

    <div className={className}>
        <img className='img-fluid img-thumbnail' src={urlPhoto} alt={urlPhoto} />
        <h2 onClick={onClick} className='mx-auto'>{name}</h2>
        <p className='mx-auto'>{secteurAction}</p>
        <button type='button' className={classInput}>Aimer </button>
        <button type='button' className={classInput2}> Envoyer une demande </button>

    </div>

)

export default VignetteComponent
// {buttons.map((button, index) => <span key={index}><button onClick={button.handleOnClick}>{button.label}</button></span>)}
// far fa-heart
// fas fa-paper-plane
