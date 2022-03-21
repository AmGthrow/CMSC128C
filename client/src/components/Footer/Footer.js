import React from 'react';
import FCSS from './Footer.module.css';
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'

function SocialMediaLinks() {
  return (
    <ul className={FCSS.links}>
      <li className={FCSS.icon}> <BsInstagram /> </li>
      <li className={FCSS.icon}> <BsFacebook /> </li>
      <li className={FCSS.icon}> <FiTwitter /> </li>
    </ul>
  )
}

function Logo() {
  return (
    <img
      id={FCSS.footer_logo}
      src={require('../../assets/footer-logo.png')}
      alt='footer logo' />
  )
}

export default function Footer() {
  return (
    <div className={FCSS.container}>

      {/* logo */}
      <Logo />

      {/* social media links */}
      <div className={FCSS.social_media_container}>
        <div className={FCSS.sm_content}>
          <p className={FCSS.msg}> Follow us! </p>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  )
}