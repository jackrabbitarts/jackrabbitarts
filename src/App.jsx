import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Store from './components/store/Store'
import Blogs from './components/blog/Blogs'
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
       <Link to="/jackrabbitarts"><div id="navbar"><img src="/jackrabbitarts/JRweb.png" ></img><h1>&#123; &nbsp; jack rabbit arts &nbsp;  &#125;</h1></div></Link>
       <div id="menu">
        <Link to="/Store"><h2>Store</h2></Link>
        <Link to="/Blogs"><h2>Blogs</h2></Link>
       </div>
 
  <Routes>
    <Route path="/jackrabbitarts" element={<Home />} />
    <Route path="/Store" element={<Store />} />
    <Route path="/Blogs" element={<Blogs />} />
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

