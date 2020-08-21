import React from 'react'

// place holder a ajouter ???
const InputComponent = ({ classCss, onChangeRadio, classIcon, classInput, type, id, name, value, min, onChange, textLabel, labelClass, placeHolder, onClick }) => (
    <div className={classCss} onChange={onChangeRadio}>
        <i className={classIcon} />
        <input
            placeholder={placeHolder}
            className={classInput}
            type={type}
            id={id}
            name={name}
            value={value}
            min={min}
<<<<<<< HEAD

            onChange={onchange}
=======
            onChange={onChange}
>>>>>>> 4c7d0b3e81e49b9cc04cd9438cbd4d39fcc03ce8
            onClick={onClick}
        />
        <label className={labelClass} data-error='wrong' data-success='right' htmlFor={id}>{textLabel}</label>
    </div>

)

export default InputComponent
