import React from 'react'

const ServiceDemandeComponent = ({ textLi, classNameLi, textPrice, classIcone }) => (
    <li className={classNameLi}>{textLi}<p>{textPrice}<i className={classIcone} /></p></li>
)

export default ServiceDemandeComponent
