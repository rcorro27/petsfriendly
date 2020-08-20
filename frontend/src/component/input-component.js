import React from 'react'

// place holder a ajouter ???
const InputComponent = ({ classCss, onChangeRadio, classIcon, classInput, type, id, name, value, min, onchange, textLabel, labelClass, placeHolder }) => (
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
            onChange={onchange}
        />
        <label className={labelClass} data-error='wrong' data-success='right' htmlFor={id}>{textLabel}</label>
    </div>

)

export default InputComponent
