import React from 'react'
import Background1 from '../images/background1.jpg'
import { Link } from 'react-router-dom'
import { GiGlassHeart } from 'react-icons/gi'


const Home = () => {
  return (


    <>

    <div className="home">
      <div className="home__container">
        <div className='icon'> < GiGlassHeart /> </div>
        <h1> ESTA PAGINA CONTIENE VIDEOS SIN ROPA </h1>
        <h2>DESEAS CONTINUAR ?</h2>
        <button><Link to='videos' > Ver Videos </Link></button>
        <button><a href='https://google.com'> Salir de la Pagina </a></button>
      </div>
    </div>
    </>
  )
}

export default Home