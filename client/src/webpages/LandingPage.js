import React, {useState, useEffect} from 'react'
import MainBanner from '../domain/MainBanner/MainBanner'
import MainFeatures from '../domain/MainFeatures/MainFeatures'
import NavBar from '../components/NavBar/NavBar'

export default function LandingPage() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }

  useEffect(() => (window.onresize = updateDimensions), []);

  return (
    <div>

      {/* navbar */}
      <NavBar width={width}/>

      {/* banners */}
      <MainBanner width={width}/>

      <MainFeatures/>
    </div>
  )
}
