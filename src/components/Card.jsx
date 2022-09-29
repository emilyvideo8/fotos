import React from 'react'

const Card = ({ imagen, titulo, link, alt }) => {
  return (

      <a href={link} target='_blank' className='card'>
        <img src={imagen} alt={alt} />
        <h1 className='titulo'>{titulo}</h1>
      </a>
  )
}

export default Card