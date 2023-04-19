import React from 'react'
import Logo from './Logo'
import Categories from './Categories'
import Menu from './Menu/Menu.jsx'
import Search from './Search'
import AddtoCart from './AddtoCart'
import Account from './Account'
import Register from './Register'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='parent'>

    <Logo/>
    <Categories/>
    <Menu/>
    <Search/>
    <AddtoCart/>
    <Account/>
    <Register/>

    
    
    </div>
  )
}

export default Navbar