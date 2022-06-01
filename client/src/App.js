import './App.css';
import React, {useState, useEffect} from 'react'
import { Routes, Route} from "react-router-dom";
import LandingPage from './webpages/LandingPage';
import AboutUsPage from './webpages/AboutUsPage';
import CoursesPage from './webpages/CoursesPage';
import EnrollNowPage from './webpages/EnrollNowPage';
import PageNotFound from './webpages/PageNotFound';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {

  const [width, setWidth] = useState(window.innerWidth)
  const [scrolled, setScrolled] = useState(false)

  const updateDimensions = () => setWidth(window.innerWidth)
  const listenScrollEvent = () => window.scrollY > 10 ? setScrolled(true) : setScrolled(false)
  
  useEffect(() => {
    window.onresize = updateDimensions
    window.addEventListener("scroll", listenScrollEvent)
  }, []);

  return (
    <div className="App">
      <NavBar width={width} scrolled={scrolled}/>
      <Routes>
        <Route path="/" element={<LandingPage width={width} scrolled={scrolled}/>} />
        <Route path="about" element={<AboutUsPage/>}/>
        <Route path="courses" element={<CoursesPage/>} />
        <Route path="enroll" element={<EnrollNowPage width={width}/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    <Footer />
    </div>
  );
}

export default App;