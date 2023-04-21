
import React from 'react'
import Button from '@mui/material/Button';
import './mainleft.css'
import leftData from './Main_left.js';

const MainLeft = () => {
  return (
    <div>
    
    
       <div className="left_parent">
       
          <div className="left_content">
             <p className='p_left'>  {  leftData[0].leftheading }   </p>
              <h1> {leftData[0].pleftheading}   </h1>
              <p>  { leftData[0].pcontent} </p>

              <Button variant="contained">Contained</Button>

          </div>



          <div className="left_imags">
          <img src="https://rainbowit.net/html/histudy/assets/images/banner/banner-01.png" alt="" />
          </div>
       </div>
    
    
    
    
    
    </div>
  )
}

export default MainLeft