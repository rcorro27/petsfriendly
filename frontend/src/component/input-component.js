import React from 'react'

// place holder a ajouter ???
const InputComponent = ({ classCss, classIcon, classInput, type, id, name, value, min, onchange, textLabel }) => (
    <div className={classCss}>
        <i className={classIcon} />

        <input
            className={classInput}
            type={type}

            id={id}
            name={name}
            value={value}
            min={min}
            onChange={onchange}
        />
        <label data-error='wrong' data-success='right' htmlFor={id}>{textLabel}</label>
    </div>

)

export default InputComponent
