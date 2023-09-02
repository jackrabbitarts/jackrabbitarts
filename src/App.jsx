import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import DigitalPainting from './components/art/DigitalPainting/DigitalPainting'
import Design from './components/art/Design/Design' 
import IdolWord from './components/blog/IdolWord/IdolWord' 
import TrueColors from './components/blog/TrueColors/TrueColors' 
import TheWheelsOnTheBus from './components/blog/TheWheelsOnTheBus/TheWheelsOnTheBus' 
import Home from './Home'


import './App.css'

function App() {


  return (
    <>
       {/* <div id="navbar"><img src="src/assets/JRweb.png" ></img><h1>&#123; &nbsp; jack rabbit arts &nbsp;  &#125;</h1></div> */}
       <Link to="/"><div id="navbar"><img src="src/assets/JRweb.png" ></img><h1>&#123; &nbsp; jack rabbit arts &nbsp;  &#125;</h1></div></Link>
  
  <Routes>
  <Route path="/" element={<Home />} />
    <Route path="/DigitalPainting" element={<DigitalPainting />} />
    <Route path="/Design" element={<Design />} />
    <Route path="/IdolWord" element={<IdolWord />} />
    <Route path="/TrueColors" element={<TrueColors />} />
    <Route path="/TheWheelsOnTheBus" element={<TheWheelsOnTheBus />} />
  </Routes>

    </>
  )
}

export default App
