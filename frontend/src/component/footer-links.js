import React from 'react'

function FooterLinks ({ divClass, classH, classUl, titre, li }) {
    return (
        <div className={divClass}>

            <h5 className={classH}>{titre}</h5>

            <ul className={classUl}>
                {li.map((icon, index) => <li key={index}>  <a href='#!'>{icon}</a> </li>)}

            </ul>

        </div>

    )
}

export default FooterLinks
