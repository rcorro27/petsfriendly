import React from 'react'
// import ImgComposant from '../component/img-composant'

const ImageTitre = ({ classDiv, src, classCss, titre }) => (
    <div className={classDiv}>
        <img src={src} className={classCss} width='200' height='200' />
        <p className='justify-content-center'>{titre}</p>
    </div>
)

export default ImageTitre
