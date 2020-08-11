
import React from 'react'
function ImgComposant ({ srcIMG, classBo }) {
    return (
        <div>
            <img className={classBo} src={srcIMG} alt={srcIMG} />
        </div>

    )
}

export default ImgComposant
