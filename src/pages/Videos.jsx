import React from 'react'
import Card from '../components/Card'
import imagen1 from '../images/IMG_20220927_162011.jpg'
import imagen2 from '../images/imagen2.jpg'
import imagen3 from '../images/imagen3.jpg'
import imagen4 from '../images/imagen4.jpg'
import imagen5 from '../images/imagen5.jpg'
import imagen6 from '../images/imagen6.jpg'
import imagen7 from '../images/imagen7.jpg'

import { GiHeartWings } from 'react-icons/gi'

const Videos = () => {
  return (

    <div className="wrapper">

      <h1 className='titulo1'>  <GiHeartWings /> GRACIAS POR TU VISITA <GiHeartWings />  </h1>
      <h1 className='titulo1' >  <GiHeartWings /> CLICK EN LA IMAGEN PARA VER EL VIDEO <GiHeartWings />  </h1>

      <div className='wrapper__container'>

        <Card  
        imagen={imagen7} 
        titulo='Amiga Es Cogida Por Un Negro Y Llora de Tanto Placer'
        link='https://disk.yandex.com/i/GS5nyEgzHbXkWw' 
        alt='video7'/> 

        <Card  
        imagen={imagen6} 
        titulo='Mi Amiga Se Desnuda Frente La Camara'
        link='https://disk.yandex.com/i/yhX2iabukCuphg' 
        alt='video6'/> 

        <Card  
        imagen={imagen5} 
        titulo='Lo Chupa Bien Rico En El Auto Hasta Hacerme Venir'
        link='https://disk.yandex.com/i/rWaBScUqeufLrg' 
        alt='video5'/> 


        <Card  
        imagen={imagen4} 
        titulo='Morenita Se Monta Y Tiene Un Delicioso Orgasmo'
        link='https://disk.yandex.com/i/mDc9WyYPVL9N4Q' 
        alt='video4'/>  
        
        <Card  
        imagen={imagen1} 
        titulo='Rico Anal A Mi Prima'
        link='https://disk.yandex.com/i/tLLSuOOJNL646w' 
        alt='video3'/>    

      <Card  
        imagen={imagen2} 
        titulo='Jovencita Recien Iniciada '
        link='https://disk.yandex.com/i/IqwfrpyzglyPPQ' 
        alt='video2'/>    

        <Card  
        imagen={imagen3} 
        titulo='Lo Chupa Rico Fenomenal, Se Lo Traga Todo'
        link='https://disk.yandex.com/i/iBnVJtMrk5hxeQ'
        alt='video1' />

      </div>

    </div>
    
  )
}

export default Videos