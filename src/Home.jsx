import React from 'react'
import { Link } from 'react-router-dom'
import FeatureContent from './components/blog/FeatureContent/FeatureContent'

const Home = () => {
  return (
    <>
        <div id="menu">

<h2>Arts & Crafts</h2>
<Link to="/DigitalPainting">Digital Painting</Link>

<Link to="/Design">Print Designs</Link>
<h2>Blogs</h2>
<Link to="/IdolWord">Idol Word</Link>
<Link to="/TrueColors">True Colors</Link>
<Link to="/TheWheelsOnTheBus">The Wheels On The Bus</Link>


</div>
<FeatureContent />
    </>

  )
}

export default Home