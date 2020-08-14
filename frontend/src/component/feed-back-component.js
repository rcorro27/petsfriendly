import React from 'react'
const VignettefeedBack = ({ urlPhoto, className, nom, secteurAction, onChangeRaiting, classInput, radioRating, onClickEnvoyer, classInput2, textBoutonEnvoyer }) => (

    <div className={className}>
        <img className='img-fluid img-thumbnail' src={urlPhoto} alt={urlPhoto} />
        <h2 className='mx-auto'>{nom}</h2>
        <p className='mx-auto'>{secteurAction}</p>

        <input type='radio' onChange={onChangeRaiting} className={classInput}>{radioRating}</input>
        <input type='radio' onChange={onChangeRaiting} className={classInput}>{radioRating}</input>
        <input type='radio' onChange={onChangeRaiting} className={classInput}>{radioRating}</input>
        <input type='radio' onChange={onChangeRaiting} className={classInput}>{radioRating}</input>
        <input type='radio' onChange={onChangeRaiting} className={classInput}>{radioRating}</input>
        <input type='radio' onChange={onChangeRaiting} className={classInput}>{radioRating}</input>
        <textarea id='text' />
        <button type='button' onClick={onClickEnvoyer} className={classInput2}>{textBoutonEnvoyer}Envoyer</button>
    </div>
)

export default VignettefeedBack
