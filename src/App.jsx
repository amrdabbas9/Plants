import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// CSS Files :
import './App.css'
import './css/normalize.css'


// Components :


// Pages
import LandingPage from './pages/LandingPage';
import About from './pages/about';
import Shop from './pages/shop';
import Contact from './pages/contact';
import Plantinfo from './pages/plantsInfo';

function App(){

  return(
    <>
    <Router>
      <Routes>
        <Route path='/home' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/plantinfo/:plantid' element={<Plantinfo />} />
      </Routes>
    </Router>
    </>
  ); 
}

export default App;