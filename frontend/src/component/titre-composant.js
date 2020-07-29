
import React from 'react'
function Title ({ id, titre1, titre2 }) {
    return (
        <div id={id}>
            <p> {titre1} </p>
            <p> {titre2} </p>
            <hr />
        </div>

    )
}

export default Title
