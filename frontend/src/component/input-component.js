import React from 'react'
// place holder a ajouter ???
const InputComponent = ({ text, type, id, name, value }) => (
    <div>
        <label htmlFor={id}>{text}</label>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
        />
    </div>
)

export default InputComponent
