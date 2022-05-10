import React from 'react'
import NCSS from './NavBar.module.css'
import nav_bar_logo from '../../assets/nav-bar-logo.png'
import { NavLink } from 'react-router-dom'
import SmallScreen from './SmallScreen'

function Logo() {

    return <img className={NCSS.logo} src={nav_bar_logo} alt='hero logo' />
}

function NavItems() {

    const path = [{ to: '/', value: 'Home' }, { to: 'about', value: 'About Us' }, { to: 'courses', value: 'Courses' }, { to: 'enroll', value: 'Enroll' }]

    const items = path.map(({ to, value }) => <li key={value}> <Item to={to} value={value} /> </li>)

    return <ul className={NCSS.items}>{items}</ul>
}

function Item({ to, value }) {

    const page = <span>{value}</span>

    return <NavLink className={NCSS.item} to={to}> {page} </NavLink>
}


function Desktop ({scrolled}) {

    return (
        <div className={scrolled ? NCSS.containerScrolled : NCSS.container } >
            <Logo /> 
            <div> <NavItems /> </div> 
        </div>
    )
}


export default function NavBar({width, scrolled}) {

    return width > 790 ? <Desktop scrolled={scrolled}/> : <SmallScreen />
}