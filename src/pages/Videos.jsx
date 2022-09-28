import React from 'react'
import Card from '../components/Card'
import imagen1 from '../images/IMG_20220927_162011.jpg'

const Videos = () => {
  return (
    <div className='wrapper__container'>
     
      <Card  
      imagen={imagen1} 
      titulo='click en la imagen para ver el video sin censura'
      link='https://disk.yandex.com/i/tLLSuOOJNL646w' />    

    <Card  
      imagen={imagen1} 
      titulo='en estos videos me dan duro por atras'
      anuncio='http://lyksoomu.com/OPFn'
      pago='https://buy.stripe.com/fZeg1OcQv0mi5OwbIJ' />    

      <Card  
      imagen={imagen1} 
      titulo='en estos videos me dan duro por atras'
      anuncio='http://lyksoomu.com/OPFn'
      pago='https://buy.stripe.com/fZeg1OcQv0mi5OwbIJ' />



      
    </div>

    
  )
}

export default Videos