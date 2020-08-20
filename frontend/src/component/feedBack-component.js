import React from 'react'
import InputComponent from './input-component'

const RadioFeedback = ({ type, valeur, niveau, name, textLbael, onChoix }) => {
    return (
        <div>
            <input type={type} text={type} name={name} value={niveau + 1} onChange={onChoix} />
            <label>{valeur}</label>
        </div>
    )
}

const VignetteFeedBack = ({ type, id, values, name, urlPhoto, className, nom, rating, onChangeEtat, classInput, onChangeTextArea, classInput2, onClickEnvoyer, textBouton, textBoutonEnvoyer }) => (

    <div className={className}>
        <img className='img-fluid img-thumbnail' src={urlPhoto} alt={urlPhoto} />
        <h2 className=' w-25 p-3 mx-auto'>{nom}</h2>
        <ul className='list-group' />

        <p className=' w-25 p-3 mx-auto'>{rating}</p>

        {values.map((v, i) => <RadioFeedback type='radio' valeur={v} niveau={i} name={name} key={i} onChoix={onChangeEtat} />)}
        <InputComponent type='textarea' id='commentaire' onChange={onChangeTextArea} cols='6' rows='7'>Votre commentaire SVP</InputComponent>

        <button type={type} id={id} onClick={onClickEnvoyer} className={classInput2}>envoyer{textBoutonEnvoyer}</button>

    </div>

)

export default VignetteFeedBack
