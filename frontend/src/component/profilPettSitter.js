import React from 'react'
const PetSitterInput = ({ text, type, id, name, value, rows, cols }) => (
    <div>
        <label htmlFor={id}>{text}</label>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            rows={rows}
            cols={cols}
        />

    </div>
)

export default PetSitterInput
