import React from 'react'
// place holder a ajouter ???
const InputComponent = ({ text, type, id, name, value, min, onChange, className, classNameLabel }) => (
    <div>
        <label htmlFor={id} className={classNameLabel}>{text}</label>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            min={min}
            onChange={onChange}
            className={className}
        />
    </div>
)

export default InputComponent
