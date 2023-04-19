import React, { useState } from 'react'
import TasklistData from './TasklistData';

const Tasklist = () => {
    const [ inputData, setInputData] = useState();

    const [ items , setItems ] = useState([ ]);




    const inputChange = ((e)=>{
        setInputData(e.target.value)

    })


    const AddTask = (()=>{
        setItems((olditems) =>{

                 return [ ...olditems, inputData]

        })


    })





  return (
    <div>
      <input type="text" 
      placeholder='type task'
      value={inputData}
      onChange={inputChange}/>




      <button onClick={AddTask} > + </button>
    
      <ul>
    
      
      { items.map((ele,index,arr)=>{
        return(
            <TasklistData 
            taskdata={ele}  />

        )


      })} 
      
      

      </ul>


     
    
    </div>
  )
}

export default Tasklist;



