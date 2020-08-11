import React from 'react'

const SelectComponent = ({ classCss, classInput, textLabel, id, name, value, options, onChange }) => (
    <div className={classCss}>
        <label htmlFor={id}>{textLabel}</label>
        <select name={name} value={value} onChange={onChange} className={classInput}>
            {options.map((option, index) => <option value={option.value} key={index}>{option.label}</option>)}
        </select>
    </div>
)

export default SelectComponent
