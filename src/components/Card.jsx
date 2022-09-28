import React from 'react'
import Sensurado from '../images/IMG_20220927_162011.jpg'

const Card = ({ imagen, titulo, link }) => {
  return (

    <div className='card'>
    <div className='image__container'>
      <button 
        className='boton__sensurado'> 
        <a href={link}>
          <img src={imagen} alt='censurado' /></a>
        </button>
    </div>
    <p className='titulo'>{titulo}</p>
    
  </div>
  )
}

export default Card