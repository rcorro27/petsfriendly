import React from 'react'
import { Button } from 'react-bootstrap'

export default function DivBoutons ({ classCss, param1, param2 }) {
    return (
        <div className={classCss}>
            <Button variant='light'>{param1}</Button>
            <a href='#'>{param2}</a>

        </div>
    )
}
