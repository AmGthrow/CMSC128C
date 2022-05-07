import React from 'react'
import NCSS from './NavBar.module.css'
import nav_bar_logo from '../../assets/nav-bar-logo.png'
import { NavLink } from 'react-router-dom'

function Logo() {

    return <img className={NCSS.logo} src={nav_bar_logo} alt='hero logo' />
}

function NavItems() {

    const path = [{ to: 'home', value: 'Home' }, { to: 'about us', value: 'About Us' }, { to: 'courses', value: 'Courses' }, { to: 'enroll', value: 'Enroll' }]

    const items = path.map(({ to, value }) => <li key={value}> <Item to={to} value={value} /> </li>)

    return (<div><ul className={NCSS.items}>{items}</ul></div>)
}

function Item({ to, value }) {

    const page = <span>{value}</span>

    return <NavLink className={NCSS.item} to={to}> {page} </NavLink>
}

export default function NavBar() {
    return (
        <div className={NCSS.container}>
            <Logo />    
            <div className={NCSS.navitems}>
                <NavItems />
            </div>                      
        </div>
    )
}