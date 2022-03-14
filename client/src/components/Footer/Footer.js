import React from 'react';
import './Footer.css';
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

function SocialMediaLinks () {
  return(
    <ul className='links'>
      <li className='icon'> <BsInstagram/> </li>
      <li className='icon'> <BsFacebook/> </li>
      <li className='icon'> <FiTwitter/> </li>
    </ul>
  )
}

function Logo () {
  return(
    <div className='img-logo-container'> 
      <img src={require('../../assets/footer-logo.png')}  alt='footer logo' /> 
    </div>
    )
}

export default function Footer() {
  return (
    <div className='footer-container'>

      <div className='f-content'>
        {/* logo */}
        <div className='coder-academy-logo'>
            <Logo/>
        {/* divider */}
        <div className='divider'></div>
      </div>

        {/* social media links */}
        <div className='social-media-container'>
          <div className='sm-content'>
            <p className='message'> Follow us! </p>
              <SocialMediaLinks />
          </div>
        </div>

        </div>
    </div>
  )
}