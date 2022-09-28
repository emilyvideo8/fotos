import React from 'react'
import Sensurado from '../images/IMG_20220927_162011.jpg'

const Card = ({ imagen, titulo, }) => {
  return (

    <div className='card'>
    <div className='image__container'>
      <button 
        className='boton__sensurado'> 
        <a href='https://disk.yandex.com/i/Q7qDi74UnsEg_A'>
          <img src={Sensurado} alt='censurado' /></a>
        </button>
    </div>
    <p className='titulo'>{titulo}</p>
    
  </div>
  )
}

export default Card