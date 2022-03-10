import React from 'react'
import './Footer.css'
import { SocialIcon } from 'react-social-icons';

function SocialMediaLinks () {
  return(
    <ul className='links'>
      <li> <SocialIcon url='https://www.facebook.com/coderacademyAU/' network='facebook' className='icon'/> </li>
      <li> <SocialIcon url='https://www.instagram.com/coder_academy/' network='instagram' className='icon'/> </li>
      <li> <SocialIcon url='https://twitter.com/CoderAcademy_au/' network='twitter' className='icon'/> </li>
    </ul>
  )
}

function Logo () {
  return(
    <div> <img src={require('../../assets/footer-logo.png')}  alt='footer logo' /> </div>
    )
}

export default function Footer() {
  return (
    <div className='main-footer'>

      <div className='container'>
          {/* logo */}
          <div className='coder-academy-logo'>
              <Logo/>
              {/* divider */}
              <div className='divider'></div>
      
          </div>

          {/* social media links */}
          <div className='social-media-container'>
              <p>Follow us!</p>
              <SocialMediaLinks/>
          </div>

        </div>
    </div>
  )
}