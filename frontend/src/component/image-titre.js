import React from 'react'
// import ImgComposant from '../component/img-composant'

const ImageTitre = ({ classDiv, src, classCss, titre }) => (

    <div className={classDiv}>
        <img src={src} className={classCss} width='200' height='200' />

        <span className=' pl-sm-5 justify-content-center'>{titre}</span>

    </div>

)

export default ImageTitre
