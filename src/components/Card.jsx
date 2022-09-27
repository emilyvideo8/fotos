import React from 'react'
import Sensurado from '../images/IMG_20220927_162011.jpg'

const Card = ({ imagen, titulo, anuncio, pago }) => {
  return (

    <div className='card'>
    <div className='image__container'>
      <button className='boton__sensurado'>click para ver foto sin censura <a href='https://disk.yandex.com/i/Q7qDi74UnsEg_A'><img src={Sensurado} alt='censurado' /></a></button>
    </div>
    <p className='titulo'>{titulo}</p>
    <div className='boton__left'>
      <div className='descripcion__boton'> esta opcion es gratis pero contiene anuncios </div>
      <button className='rojo'><a href={anuncio} rel='noreferrer noopener'>VER CON ANUNCIOS</a></button> 
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