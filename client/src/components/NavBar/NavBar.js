import React, {useState} from 'react'
import NCSS from './NavBar.module.css'
import nav_bar_logo from '../../assets/logo-textless.png'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

function Logo() {

    return <img className={NCSS.logo} src={nav_bar_logo} alt='hero logo' />
}

function NavItems({path}) {

    const [showLinks, setShowLinks] = useState(false)

    const links = path.map(({ to, value }) => 
        <NavLink 
            className={NCSS.link}
            key={value} 
            to={to}
            style={({ isActive }) => {return {color: isActive ? "red" : "",}}}> 
            {value} 
        </NavLink>)

    return (
        <div className={NCSS.rightSide}>
            <div className={NCSS.links} id={showLinks ? NCSS.hidden : ""}> {links} </div>
            <button onClick={() => setShowLinks(!showLinks)}><GiHamburgerMenu/></button>
        </div>
    )
}


export default function NavBar({scrolled}) {

    const path = [{ to: '/', value: 'Home' }, { to: 'about', value: 'About Us' }, { to: 'courses', value: 'Courses' }, { to: 'enroll', value: 'Enroll' }]

    return (
        <div className={NCSS.container } id={scrolled ? NCSS.scrolled : ""}>
            <Logo /> 
            <NavItems path={path}/> 
        </div>
    )
}