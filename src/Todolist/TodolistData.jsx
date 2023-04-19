import React from 'react'

const TodolistData = (props) => {



  return (
    <div>

    <li>


    <i class="fa-solid fa-circle-xmark" 
   
    onClick={()=>{
      props.onSelect(props.id)

      
  }}>
    
    </i>

    { props.text}
    
    </li>
    
    
    </div>
  )
}

export default TodolistData;