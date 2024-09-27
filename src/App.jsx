import { useState } from 'react'
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Highlights from "./components/Hightlights"
import Testimonials from "./components/Testimonials"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*-- HEADER --*/}
      <Header />
    {/*-- HERO SECTION --*/}
    <HeroSection />
    {/*-- HIGHLIGHTS SECTION --*/}
    <Highlights />
    {/*-- Testimonials SECTION --*/}
    <Testimonials />
    {/*-- About Us SECTION --*/}
    <AboutUs />
    {/*-- FOOTER SECTION --*/}
    <Footer />
    </>
  )
}

export default App
