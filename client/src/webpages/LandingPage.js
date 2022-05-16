import React, {useState, useEffect} from 'react'
import MainBanner from '../domain/MainBanner/MainBanner'
import MainFeatures from '../domain/MainFeatures/MainFeatures'
import NavBar from '../components/NavBar/NavBar'
import Courses from '../domain/Courses/Courses'
import EmailInputField from '../domain/EmailInputField/EmailInputField'
import Footer from '../components/Footer/Footer'
export default function LandingPage() {

  const [width, setWidth] = useState(window.innerWidth)
  const [scrolled, setScrolled] = useState(false)

  const updateDimensions = () => setWidth(window.innerWidth)
  const listenScrollEvent = () => window.scrollY > 10 ? setScrolled(true) : setScrolled(false)
  
  useEffect(() => {
    window.onresize = updateDimensions
    window.addEventListener("scroll", listenScrollEvent)
  }, []);

  return (
    <div>

      <NavBar width={width} scrolled={scrolled}/>
      
      <MainBanner width={width}/>

      <MainFeatures/>

      <Courses width={width}/>

      <EmailInputField/>

      <Footer/>
    </div>
  )
}


