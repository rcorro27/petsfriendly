import React from 'react'

function SpanComponent ({ divClass, text }) {
    return (
        <div className={divClass}>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>

        </div>

    )
}

export default SpanComponent
