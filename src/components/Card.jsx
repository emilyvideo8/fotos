import React from 'react'

const Card = ({ imagen, titulo, anuncio, pago }) => {
  return (
    <div className='card'>
    <div className='image__container'>
      <img src={imagen} alt = 'escuela' />
    </div>
    <p className='titulo'>{titulo}</p>
    <small className='descripcion'>la carpeta contiene 3 videos muy ardientes</small>
    <div className='boton__left'>
      <div className='descripcion__boton'> esta opcion es gratis pero contiene anuncios </div>
      <button className='rojo'><a href={anuncio} rel='noreferrer noopener'>VER GRATIS</a></button> 
    </div>
    <div className='boton__right'>
      <div className='descripcion__boton'>esta opcion no tiene anuncios pero cuesta MXN $10</div>
      <button className='azul'><a href={pago} rel='noreferrer noopener'> VER SIN ANUNCIOS </a></button>
    </div>
    <small>al final del proceso seras dirigido al link de la carpeta donde podras ver los videos</small>
  </div>
  )
}

export default Card