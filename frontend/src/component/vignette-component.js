import React from 'react'
// import ImgComposant from 'img-composant'

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

const VignetteComponent = ({ urlPhoto, classname, name, text, codePostal }) => (
    // est ce que on recoit une liste de pettsitter ?? question a posser
/* key={index} */
    <div>
        <img className={classname} src={urlPhoto} alt={urlPhoto} />
        <div>
            <ol>
                <li>
                    <h2>{text}</h2>
                    <p>{codePostal}</p>
                    <button class='far fa-heart' />
                </li>

            </ol>
        </div>
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
