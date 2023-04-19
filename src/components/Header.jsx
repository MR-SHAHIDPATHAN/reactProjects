import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
    
       <div className='heder'>
         <div className="header_logo">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" width={50} />
         </div>


         <div className="header_menu">
         <a href="">home </a>
         <a href="">about</a>
         <a href="">blog</a>
         
         </div>




         <div className="header_button">
         <button>sign in </button>
         <button>logout</button>
         
         </div>
       
       </div>


        





    
    
    
    
    </div>
  )
}

export default Header