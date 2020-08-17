import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const DivBoutons = ({ classCss, titre }) => {
    return (
        <div className={classCss}>
            <Link to='/search'>
                <Button variant='danger mt-3'>

                    {titre}

                </Button>
            </Link>

            <p className='text-light mx-auto'>En savoir plus </p>

        </div>
    )
}
export default DivBoutons
