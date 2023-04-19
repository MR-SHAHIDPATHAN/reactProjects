import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () => {
  return (
    <div className='menus'>

<Link className='links'     to="/"  >  Home  </Link>
<Link className='links'     to='courses'>  Course  </Link>
<Link className='links'    to='dashborad'>  Dashboard  </Link>
<Link className='links'    to='pages'>  pages  </Link>
<Link className='links'    to='elements'>  Elements  </Link>
<Link className='links'    to='blog'>  Blog  </Link>

  
    
    
    
    
    </div>
  )
}

export default Menu