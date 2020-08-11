import React from 'react'
import { Button } from 'react-bootstrap'

const DivBoutons = ({ classCss, titre }) => {
    return (
        <div className={classCss}>

            <Button variant='light'>{titre}</Button>

        </div>
    )
}
export default DivBoutons
