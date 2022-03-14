import React from 'react'
import './NavBar.css'
import nav_bar_logo from '../../assets/nav-bar-logo.png'
import { NavLink } from 'react-router-dom'

function Item ({to, value}) {
    return (
        <NavLink className='item' to={to}> <span>{value}</span> </NavLink>
    )
}

function NavItems () {
    return (
    <ul>
        <li> <Item to='page-a' value='Page  A'/> </li>
        <li> <Item to='page-b' value='Page  B'/>  </li>
        <li> <Item to='page-c' value='Page  C'/>  </li>
    </ul>
    )
}

export default function NavBar() {
  return (
    <div className='nav-bar-container'>
        <div className='nb-content'>
            <img src={nav_bar_logo} alt='hero logo'/>
            <div>
                <NavItems/>
            </div>
        </div>
    </div>
  )
}
