import React from 'react'
import Background from '../images/backgroundHome.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (


    <>

    <div className="home__container">
        <h1> esta pagina contiene mujeres sin ropa estas seguro que deseas continuar ??? </h1>
        <img src={Background} alt="background" />
        <button><Link to='videos' > si</Link></button>
        <button><a href='https://google.com'>no</a></button>
    </div>

    </>
  )
}

export default Home