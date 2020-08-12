import React from 'react'
import { Button } from 'react-bootstrap'

const DivBoutons = ({ classCss, titre }) => {
    return (
        <div className={classCss}>

            <Button variant='danger mt-3'>{titre}</Button>
            <p className='text-light'>En savoir plus </p>

        </div>
    )
}
export default DivBoutons
