import React from 'react'
// import ImgComposant from '../component/img-composant'

const ImageTitre = ({ classDiv, src, classCss, titre }) => (
    <div>
        <div className={classDiv}>
            <img src={src} className={classCss} width='200' height='200' />

            <p className='mx-autor'>{titre}</p>

        </div>
    </div>

)

export default ImageTitre
