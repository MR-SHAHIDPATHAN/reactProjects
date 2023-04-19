import React from 'react'
import Cart from './Cart'
import Logo from './Logo'
import MyAcount from './MyAcount'
import SearchBar from './SearchBar'
import './ecommerce.css'

const Ecoomerce = () => {
  return (
    <div>


    <div className='parent'>
    <Logo/>
    <SearchBar/>
    <MyAcount/>
    <Cart/>


    
    </div>
   

    
    
    </div>
  )
}

export default Ecoomerce