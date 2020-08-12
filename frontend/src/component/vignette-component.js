import React from 'react'
//* import ImgComposant from 'img-composant'

const VignetteComponent = ({ urlPhoto, className, nom, rating, onClickProfil, classInput, classInput2, onClickEnvoyer, textBoutonProfil, textBoutonEnvoyer, servicesSitter, servicesTotal }) => (

    <div className={className}>
        <img className='img-fluid img-thumbnail' src={urlPhoto} alt={urlPhoto} />
        <h2 className='mx-auto'>{nom}</h2>
        <ul className='list-group'>
            {/* ul  a sortir dans une autre function */}
            {servicesSitter.map((infos, index) => {
                // infos - 1 est egal a lindex ou ca se trouve dans la constante services
                return <li key={index} className='list-group-item list-group-item-danger'>{servicesTotal[infos - 1].description} {servicesTotal[infos - 1].prix_service}</li>
            })}

        </ul>
        <p className='mx-auto'>{rating}</p>
        <button type='button' onClick={onClickProfil} className={classInput}>{textBoutonProfil} </button>
        <button type='button' onClick={onClickEnvoyer} className={classInput2}>{textBoutonEnvoyer}</button>
    </div>

)

export default VignetteComponent
// {buttons.map((button, index) => <span key={index}><button onClick={button.handleOnClick}>{button.label}</button></span>)}
// far fa-heart
// fas fa-paper-plane
