import React from 'react'

const BoutonComponent = ({ type, id, name, value }) => (
    <div>
        <button type={type} id={id} name={name} value={value}>{name} </button>
    </div>
)

export default BoutonComponent
