import React from 'react'
import Card from '../components/Card'
import Escuela from '../images/escuela.jpg'

const Videos = () => {
  return (
    <>
      <Card  
      imagen={Escuela} 
      titulo='en estos videos me dan duro por atras'
      anuncio='http://lyksoomu.com/OPFn'
      pago='https://buy.stripe.com/fZeg1OcQv0mi5OwbIJ' />
    </>
  )
}

export default Videos