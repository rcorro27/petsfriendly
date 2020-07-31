import React from 'react'

const VignetteComponent = ({ buttons }) => (
    <div>
        {buttons.map((button, index) => <span key={index}><button onClick={button.handleOnClick}>{button.label}</button></span>)}
    </div>
)
export default VignetteComponent
