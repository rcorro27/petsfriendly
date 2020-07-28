import React from 'react'
import SpanPersonalise from './SpanPersonalise'

function DivSpans ({ divClass }) {
    return (
        <div className={divClass}>
            <SpanPersonalise text='button 1' />
            <SpanPersonalise text='button 2' />
            <SpanPersonalise text='button 3' />
        </div>

    )
}

export default DivSpans
