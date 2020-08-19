import React from 'react'

const ServiceDemandeComponent = ({ classNameLi, classIcone, servicesSitter, servicesTotal }) => (
    servicesSitter.map((infos, index) => {
        return <li className={classNameLi} key={index}>{servicesTotal[infos - 1].description}<p>{servicesTotal[infos - 1].prix_service}<i className={classIcone} /></p></li>
    })
)

export default ServiceDemandeComponent
