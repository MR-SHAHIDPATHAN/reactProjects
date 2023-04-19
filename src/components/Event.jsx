import React, { useState} from 'react'

// hooks useState() 

const Event = () => {

const [ count , setCount ] = useState(0);
const [ Data , setData ] = useState("ok");
const [ value , setValue ] = useState({});



const ChangeCityName = (()=>{
 setValue("Pune")

})

  

  const ShowData = ((e)=>{
    setData(e.target.value)

  })

    const UpdateValue = (()=>{
        setCount("done") 
    })


    const CounterIncr = (()=>{
        setCount(count + 1) // // done + 1 
        console.log(count);

    })

    const CounterDecr = (()=>{
      // setCount((city) => city - 1) // done - 1 // NaN 
      setCount((city)=>{
       return city - 1
        
      })
     
    })
    





const Message = (()=>{
    alert("ok done ")
});





  return (
    <div>
    <p> { value } </p>
    <button onClick={ChangeCityName}>changeCityName</button>
     
    <button onClick={Message}>click me </button>

     <p>  {  count}  </p>
     <button onClick={CounterIncr}>Counter Incr +  </button>
     <button onClick={CounterDecr}> counter Decr - </button>


     <button onClick={UpdateValue}>update</button>
    

     <input type="text"  onChange={ShowData} />
     <p>  { Data } </p>


     <button onClick={Message} > showmsg</button>

    
    </div>


  )
}

export default Event