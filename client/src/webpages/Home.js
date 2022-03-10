import React from 'react';
import './landingPage.css';
import logo_textless from "./logo_textless.png";

export default function Home() {
  return (
    <div>
      <HeroShot></HeroShot>
    </div>
  )
}

function HeroShot() {
  return (
    <div id="hero-shot">
      <img src={logo_textless} id="hero__logo" alt="Codercademy logo"></img>
      <h1>We are <b>Codercademy</b></h1>
      <h3>cultivating learning since 2020</h3>
    </div>
  )
}