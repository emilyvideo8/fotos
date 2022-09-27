import React from 'react'
import Background1 from '../images/background1.jpg'
import { Link } from 'react-router-dom'


const Home = () => {
  return (


    <>
    <div className="home">
      <div className="home__container">
        <h1> ESTA PAGINA CONTIENE MUJERES SIN ROPA </h1>
        <h2>DESEAS CONTINUAR ?</h2>
        <img src={Background1} alt="background" />
        <button><Link to='videos' > Ver Videos </Link></button>
        <button><a href='https://google.com'> Salir de la Pagina </a></button>
      </div>
    </div>
    </>
  )
}

export default Home