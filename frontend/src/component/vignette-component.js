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

const VignetteComponent = ({ urlPhoto, className, name, secteurAction, onClick }) => (

    <div>

        <div className={className}>
            <img src={urlPhoto} alt={urlPhoto} />
            <h2 onClick={onClick}>{name}</h2>
            <p>{secteurAction}</p>
            <button className='far fa-heart' />

        </div>
    </div>

)

export default VignetteComponent
// {buttons.map((button, index) => <span key={index}><button onClick={button.handleOnClick}>{button.label}</button></span>)}
