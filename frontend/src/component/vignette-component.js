import React from 'react'

const VignetteComponent = ({ urlPhoto, className, nom, rating, onClickProfil, classInput, classInput2, onClickEnvoyer, textBoutonProfil, textBoutonEnvoyer, servicesSitter, servicesTotal, id, link }) => (

    <div className={className}>
        <img className='img-fluid img-thumbnail rounded-circle m-20' style={{ heigth: '30vh', width: '75%' }} src={'https://pets-friendly.herokuapp.com/images/images_profiles/' + urlPhoto} alt={urlPhoto} />
        <h2 className=' w-25 p-3 mx-auto'>{nom}</h2>
        <ul className='list-group'>
            {servicesSitter.map((infos, index) => {
                return <li key={index} className='list-group-item list-group-item-danger'>{servicesTotal[infos - 1].description_service} {servicesTotal[infos - 1].prix_service}<i className='fas fa-dollar-sign' /></li>
            })}

            <p className=' w-25 p-3 mx-auto'>{rating}</p>
            <button type='button' name={id} onClick={onClickProfil} className={classInput}>{textBoutonProfil} </button>
        </ul>

    </div>

)

export default VignetteComponent
