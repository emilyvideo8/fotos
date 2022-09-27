import { useState } from 'react';
import Escuela from './escuela.jpg'
import './App.css';
import Card from './components/Card';

function App() {

  const [displayNone, setDisplayNone] = useState(false);

  return (
    // <div className='card'>
    //   <div className='image__container'>
    //     <img src={Escuela} alt = 'escuela' />
    //   </div>
    //   <p>en estos videos me dan duro por atras</p>
    //   <p>la carpeta contiene 3 videos muy ardientes</p>
    //   <div>
    //     <span>esta opcion es gratis</span><button>VER GRATIS</button> <br/>
    //     <span>pero tiene anuncios</span> <br /><br />
    //     <span>esta opcion no tiene anuncios</span><br />
    //     <span>pero cuesta MXN $10</span><br />
    //   </div>
    // </div>
    <>
      <Card  
        imagen={Escuela} 
        titulo='en estos videos me dan duro por atras'
        anuncio='http://lyksoomu.com/OPFn'
        pago='https://buy.stripe.com/fZeg1OcQv0mi5OwbIJ' />
        <div className='popup'>
          <div className={`${ displayNone ? 'popup__container' : 'display__none' }`}> 
            <h1>este contenido es para mayores de edad deseas continuar ??? </h1>
            <button onClick={()=> setDisplayNone(true)}> si</button>
            <button>no</button>
           </div>
        </div>
    </>

  );
}

export default App;
