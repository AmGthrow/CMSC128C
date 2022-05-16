import React from 'react'
import NCSS from './NavBar.module.css'
import nav_bar_logo from '../../assets/nav-bar-logo.png'
import { NavLink } from 'react-router-dom'
import SmallScreen from './SmallScreen'

function Logo() {

    return <img className={NCSS.logo} src={nav_bar_logo} alt='hero logo' />
}

function NavItems({path}) {

    const items = path.map(({ to, value }) => <nav key={value}> 
        <NavLink 
        className={NCSS.item} 
        to={to}
        style={({ isActive }) => {return {color: isActive ? "red" : "",}}}> 
        {value} 
        </NavLink> </nav>)

    return <div className={NCSS.items}>{items}</div>
}

function Desktop ({scrolled, path}) {

    return (
        <div className={scrolled ? NCSS.containerScrolled : NCSS.container } >
            <Logo /> 
            <div> <NavItems path={path}/> </div> 
        </div>
    )
}

export default function NavBar({width, scrolled}) {

    const path = [{ to: '/', value: 'Home' }, { to: 'about', value: 'About Us' }, { to: 'courses', value: 'Courses' }, { to: 'enroll', value: 'Enroll' }]


    return width > 920 ? <Desktop scrolled={scrolled} path={path}/> : <SmallScreen />
}