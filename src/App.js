import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Videos from './pages/Videos';
import Fotos from './pages/Fotos';


function App() {

  const [displayNone, setDisplayNone] = useState(false);

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Videos />} />
        <Route path='fotos' element={<Fotos />} />
      </Routes>
    </HashRouter>
 

  );
}

export default App;
