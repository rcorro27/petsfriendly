import React from 'react'

// place holder a ajouter ???
const InputComponent = ({ classCss, classIcon, classInput, type, id, name, value, min, onChange, textLabel, labelClass, placeHolder, onClick }) => (
    <div className={classCss}>
        <i className={classIcon} />
        <input
            placeholder={placeHolder}
            className={classInput}
            type={type}
            id={id}
            name={name}
            value={value}
            min={min}
            onChange={onChange}
            onClick={onClick}
        />
        <label className={labelClass} data-error='wrong' data-success='right' htmlFor={id}>{textLabel}</label>
    </div>

)

export default InputComponent
