import React from 'react'
import imgComposant from 'component-img-composant'

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

const ulComponent = (name, text, codepostal, button) => {
    return (

        <div>
            <ol>
                <li>{text}</li><button onClick={button.handleOnClickAimer}><i class='fa fa-heart' aria-hidden='true' /></button>
                <p>{codepostal}</p>

            </ol>

        </div>
    )
}

const VignetteComponent = ({ pettSitters, classname }) => (
    // est ce que on recoit une liste de pettsitter ?? question a posser

    <div>
        {pettSitters.map((info, index) => <imgComposant srcIMG={info.url_photo} key={index} classBo={classname} />)}

        {pettSitters.map((info, index) => ulComponent(info.nom, info.textDescriptif, index))}

    </div>
)
export default VignetteComponent
// {buttons.map((button, index) => <span key={index}><button onClick={button.handleOnClick}>{button.label}</button></span>)}
