import React from 'react'
//* import ImgComposant from 'img-composant'

const VignetteComponent = ({ urlPhoto, className, nom, rating, onClickProfil, classInput, classInput2, onClickEnvoyer, textBoutonProfil, textBoutonEnvoyer, servicesSitter, servicesTotal, id }) => (

    <div className={className}>
        <img className='img-fluid img-thumbnail' src={urlPhoto} alt={urlPhoto} />
        <h2 className=' w-25 p-3 mx-auto'>{nom}</h2>
        <ul className='list-group'>
            {/* ul  a sortir dans une autre function */}
            {servicesSitter.map((infos, index) => {
                // infos - 1 est egal a lindex ou ca se trouve dans la constante services
                return <li key={index} className='list-group-item list-group-item-danger'>{servicesTotal[infos - 1].description_service} {servicesTotal[infos - 1].prix_service}<i className='fas fa-dollar-sign' /></li>
            })}

        </ul>
        <p className=' w-25 p-3 mx-auto'>{rating}</p>
        <button type='button' name={id} onClick={onClickProfil} className={classInput}>{textBoutonProfil} </button>
        <button type='button' name={id} onClick={onClickEnvoyer} className={classInput2}>{textBoutonEnvoyer}</button>
    </div>

)

export default VignetteComponent
// {buttons.map((button, index) => <span key={index}><button onClick={button.handleOnClick}>{button.label}</button></span>)}
// far fa-heart
// fas fa-paper-plane
