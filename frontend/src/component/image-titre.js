import React from 'react'
// import ImgComposant from '../component/img-composant'

const ImageTitre = ({ classDiv, src, classCss, titre }) => (
    <div className={classDiv}>
        <img src={src} className={classCss} width='140' height='140' />
        <h3>{titre}</h3>
    </div>
)

export default ImageTitre
