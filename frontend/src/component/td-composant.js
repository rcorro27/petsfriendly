import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const TdComposant = ({ nom, prenom, email, etatCompte }) => {
    return (
        <tr>
            <td>{nom}</td><td>{prenom}</td><td>{email}</td>
            <td>
                {etatCompte}
            </td>

        </tr>
    )
}
export default TdComposant
