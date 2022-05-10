import React from 'react';
import FCSS from './Footer.module.css';
import { BsFacebook} from 'react-icons/bs'
import { IoMdMail} from 'react-icons/io'

function SocialMediaLinks() {
  return (
    <ul className={FCSS.links}>
      <li className={FCSS.icon}> <BsFacebook /> </li>
      <li className={FCSS.icon}> <IoMdMail /> </li> 
    </ul>
  )
}

function Logo() {
  return (
    <img
      id={FCSS.footer_logo}
      src={require('../../assets/logo_textless.png')}
      alt='footer logo' />
  )
}

function Copyright() {
  return (
    <div className={FCSS.msg}>
      <p> Copyright 2022 &copy;Codercademy <br/>All Rights Reserved</p> 
    </div>
  )
}

export default function Footer() {
  return (
    <div className={FCSS.container}>

      {/* logo */}
      <Logo />
      <Copyright />
      {/* social media links */}
      <div className={FCSS.social_media_container}>
        <SocialMediaLinks />
      </div>
    </div>
  )
}

