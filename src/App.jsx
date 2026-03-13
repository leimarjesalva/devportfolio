import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Panels from './components/Panels'
import Manifesto from './components/Manifesto'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative z-10 w-full overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Panels />
      <Manifesto />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}
