import React from 'react'

const TasklistData = (props) => {
  return (
    <div>
    
    <li> 
    <i class="fa-solid fa-circle-xmark"
   
    
    
    ></i>

    {props.taskdata}
    
    
    </li>
    
    
    </div>
  )
}

export default TasklistData;