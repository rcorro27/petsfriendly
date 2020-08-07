import React from 'react'
// place holder a ajouter ???
const InputComponent = ({ text, type, id, name, value, min, onChange }) => (
    <div>
        <label htmlFor={id}>{text}</label>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            min={min}
            onChange={onChange}
        />
    </div>
)

export default InputComponent
