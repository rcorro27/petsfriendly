import React from 'react'

// place holder a ajouter ???
const InputComponent = ({ text, type, id, name, value, min, onChange, className, classNameLabel }) => (
    <div className={classCss}>
        <label htmlFor={id} className={classNameLabel}>{text}</label>

        <input
            className={classInput}
            type={type}

            id={id}
            name={name}
            value={value}
            min={min}
            onChange={onChange}
            className={className}
        />
        <label data-error='wrong' data-success='right' htmlFor={id}>{textLabel}</label>
    </div>

)

export default InputComponent
