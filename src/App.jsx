import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoFirst from './components/InfoFirst';
import InfoSec from './components/InfoSec';
import Footer from './components/Footer';
import Card from './components/Card';
import InfoThird from './components/InfoThird';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero />
      <InfoFirst />
      <InfoSec />
      {/* <Card /> */}
      <InfoThird />
      <Footer />
    </>
  )
}

export default App
