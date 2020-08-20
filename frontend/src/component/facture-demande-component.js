import React from 'react'

const FactureDemandeComponent = ({ text, className, classNameText, servicesSitter, servicesTotal }) => (

    <p className={classNameText}>{text}<i className={className} /></p>

)

export default FactureDemandeComponent
