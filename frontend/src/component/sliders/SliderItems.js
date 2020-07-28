import React from 'react'

function SliderItems ({ imgSrc }) {
    return (
        <div id='slider'>
            <div className='slider-container'>

                <img src={imgSrc} alt={imgSrc} />
            </div>
        </div>

    )
}

export default SliderItems
