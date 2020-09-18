import React from 'react'

const InputComponent = ({ classCss, onChangeRadio, classIcon, classInput, type, id, name, value, min, onChange, textLabel, labelClass, placeHolder, onClick }) => (
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
            onChange={onChange}
            onClick={onClick}
            required

        />
        <label className={labelClass} data-error='wrong' data-success='right' htmlFor={id}>{textLabel}</label>
    </div>

)

export default InputComponent
