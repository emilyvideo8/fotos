import React from 'react'
import Card from '../components/Card'
import imagen1 from '../images/IMG_20220927_162011.jpg'
import imagen2 from '../images/imagen2.jpg'
import imagen3 from '../images/imagen3.jpg'

const Videos = () => {
  return (
    <div className='wrapper__container'>
     
      <Card  
      imagen={imagen1} 
      titulo='CLICK EN LA IMAGEN PARA VER EL VIDEO SIN CENSURA'
      link='https://disk.yandex.com/i/tLLSuOOJNL646w' />    

    <Card  
      imagen={imagen2} 
      titulo='CLICK EN LA IMAGEN PARA VER EL VIDEO SIN CENSURA'
      link='https://disk.yandex.com/i/IqwfrpyzglyPPQ' />    

      <Card  
      imagen={imagen3} 
      titulo='CLICK EN LA IMAGEN PARA VER EL VIDEO SIN CENSURA'
      link='https://disk.yandex.com/i/iBnVJtMrk5hxeQ' />



      
    </div>

    
  )
}

export default Videos