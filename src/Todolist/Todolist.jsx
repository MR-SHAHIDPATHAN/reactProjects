import React, { useState } from 'react'
import TodolistData from './TodolistData';


const Todolist = () => {
const [ inputlist, setInputlist] = useState("apple");
const [ items , setItems ] = useState([]);

const inputCahgne = ((e)=>{
    setInputlist(e.target.value)
})

const AdditemsData = (()=>{
    setItems((olditems)=>{
        return [...olditems, inputlist]

    })

    setInputlist("");

})

const DeleteItms = ((id)=>{
    console.log("deletes");
    setItems((olditems)=>{
        return olditems.filter((ele,index,arr)=>{
            return index !== id;

        })


    })
})

  return (
    <div>
     <div>
    <input type="text" 
         value={inputlist}
         placeholder='write notes' 
         onChange={inputCahgne} />
         <button onClick={AdditemsData}> +  </button>

         <ul>

     {
        items.map((curEle,index)=>{
               return(
                <TodolistData 
                key={index}
                id={index}
                text={curEle}
                onSelect={DeleteItms}
                
                />
            )
        })

     } 
         </ul>
         </div>
     </div>
  )
}
export default Todolist