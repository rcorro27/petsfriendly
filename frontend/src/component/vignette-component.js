import React from 'react'
// import imgComposant from 'img-composant'

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

function ulComponent (name, text, codepostal, button) {
    return (

        <div>
            <ol>
                <li>{text}</li><button onClick={button.handleOnClickAimer}><i class='fa fa-heart' aria-hidden='true' /></button>
                <p>{codepostal}</p>
                <p>{name}</p>

            </ol>

        </div>
    )
}

const VignetteComponent = ({ urlPhoto, classname, name, text, codepostal }) => (
    // est ce que on recoit une liste de pettsitter ?? question a posser
/* key={index} */
    <div>
        {/* <imgComposant srcIMG={urlPhoto} classBo={classname} /> */}
        <img className={classname} src={urlPhoto} alt={urlPhoto} />

        <ulComponent name={name} text={text} codepostal={codepostal} />

    </div>

)
/*
function Title ({ id, titre1, titre2 }) {
    return (
        <div id={id}>
            <p> {titre1} </p>
            <p> {titre2} </p>
            <hr />
        </div>

    )
}
*/
export default VignetteComponent
// {buttons.map((button, index) => <span key={index}><button onClick={button.handleOnClick}>{button.label}</button></span>)}
