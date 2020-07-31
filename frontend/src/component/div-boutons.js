import React from 'react'
import { Button } from 'react-bootstrap'

export default function DivBoutons ({ classCss, param2 }) {
    return (
        <div className={classCss}>
            <Button variant='light'>{param2}</Button>
            <a href='#'>En savoir plus</a>

        </div>
    )
}
