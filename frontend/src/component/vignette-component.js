import React from 'react'
import { Link } from 'react-router-dom'
//* import ImgComposant from 'img-composant'

const VignetteComponent = ({ urlPhoto, className, nom, rating, onClickProfil, classInput, classInput2, onClickEnvoyer, textBoutonProfil, textBoutonEnvoyer, servicesSitter, servicesTotal, id, link }) => (

    <div className={className}>
        <img className='img-fluid img-thumbnail rounded-circle m-20' style={{ heigth: '30vh', width: '75%' }} src={'https://pets-friendly.herokuapp.com/images/images_profiles/' + urlPhoto} alt={urlPhoto} />
        <h2 className=' w-25 p-3 mx-auto'>{nom}</h2>
        <ul className='list-group'>
            {/* ul  a sortir dans une autre function */}
            {servicesSitter.map((infos, index) => {
                // infos - 1 est egal a lindex ou ca se trouve dans la constante services
                // SI API PLANTE CHANGER DESCRIPTION_SERVICE POUR DESCRIPTION, ET LE TABLEAU POUR UN LOCAL CHANGER SERVICES
                return <li key={index} className='list-group-item list-group-item-danger'>{servicesTotal[infos - 1].description_service} {servicesTotal[infos - 1].prix_service}<i className='fas fa-dollar-sign' /></li>
            })}

            <p className=' w-25 p-3 mx-auto'>{rating}</p>
            <Link to={link}>  <button type='button' name={id} onClick={onClickProfil} className={classInput}>{textBoutonProfil} </button></Link>
            {/* <button type='button' name={id} onClick={onClickEnvoyer} className={classInput2}>{textBoutonEnvoyer}</button> */}
        </ul>

    </div>

)

export default VignetteComponent
// {buttons.map((button, index) => <span key={index}><button onClick={button.handleOnClick}>{button.label}</button></span>)}
// far fa-heart
// fas fa-paper-plane
