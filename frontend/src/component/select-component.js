import React from 'react'

const SelectComponent = ({ text, id, name, value, options }) => (
    <div>
        <label htmlFor={id}>{text}</label>
        <select name={name} value={value}>
            {options.map((option, index) => <option value={option.value} key={index}>{option.label}</option>)}
        </select>
    </div>
)

export default SelectComponent
