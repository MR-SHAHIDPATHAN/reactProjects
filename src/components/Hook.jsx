import React,{useState} from 'react'

const Hook = () => {
    const [ count, setCount ] = useState(1);

    const [ Data , setData ] = useState("loading...");
    const [ text , setText ] = useState("");
    const [liked, setLiked] = useState();

    //checkbox 
    const handleChange = ((e)=>{
      setLiked(e.target.checked)
    

    })

  // onChange event text input 
  const getText = ((e)=>{
    setText(e.target.value)

  })

  const emptyText = (()=>{
      setText("")
  })

  // button- 1 
  const btn1 = (()=>{
    setData("HTML")

  })

  const btn2 = (()=>{
    setData("Wrong- 2")

  })

  const btn3 = (()=>{
    setData("Wrong- 3")
  })

  const btn4 = (()=>{
    setData("Wrong - 4")
  })





   const Incrment = (()=>{
    setCount(count + 1)   // 1 2 3 4 
    
   });
   
   const Decrment = (()=>{
      setCount(count - 1 ) 
   });

  return (
    <div>
     <h1> { count}   </h1>

     <button onClick={Incrment} > incr + </button>
     <button onClick={Decrment}> dcrm - </button>

     <h1>  find the HTML word </h1>

     <button onClick={btn1}> open-1  </button>
     <button onClick={btn2}> open-2  </button>
     <button onClick={btn3}> open-3  </button>
     <button onClick={btn4} >open-4  </button>

     <p> output : {Data}  </p>



     <hr /> <hr />
 
     <input type="text" onChange={getText}   />

     <p>You typed :  {text} </p>

     <button onClick={emptyText}>reset</button>






       <input 
       type="checkbox"  
      checked={liked} 
      onChange={handleChange}
      /> 
        
       <p>  {   liked ? "you Liked this":"you did not liked this "} </p>

    </div>
  )
}

export default Hook;


