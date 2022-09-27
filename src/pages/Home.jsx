import React from 'react'
import Background from '../images/backgroundHome.jpg'
import Background1 from '../images/background1.jpg'
import { Link } from 'react-router-dom'


const Home = () => {
  return (


    <>
    <div className="home">
      <div className="home__container">
        <h1> esta pagina contiene mujeres sin ropa estas seguro que deseas continuar ??? </h1>
        <img src={Background1} alt="background" />
        <button><Link to='videos' > Ver Videos </Link></button>
        <button><a href='https://google.com'> Salir de la Pagina </a></button>
      </div>
    </div>
    </>
  )
}

export default Home