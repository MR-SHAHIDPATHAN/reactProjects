import React , {useState} from 'react'

const Hooks = () => {

const [ count,setCount] = useState(0);
const [data , setData ] = useState("")
const [liked, setLiked] = useState(true);
const [ values , setValues ] = useState("City");
const [ age , setAge ] = useState(20 );

const [ form , setForm ] = useState({
  firstName:"karad",
  lastName:"satara",
  email:"abcd@gmail"
});

// const DemoCity = ((e)=>{
//   setForm(...form, e.target.value)

// })

   
const inputValue = ((e)=>{
  setValues(e.target.value)

})


const incrmenAge = (()=>{
  setAge(age + 1)

})

   


const Increm = (()=>{
    // setCount(count+1)

    setCount((e)=>{
        return e + 1; 

    })
})



const Decrem = (()=>{
    setCount((e)=>{
        return e -1; 
    })
})



const Incrm_five = (()=>{
    setCount((e)=>{
        return e + 5; 

    })
})

// forms input change 

const InputChange = ((e)=>{
    setData(e.target.value)
})

// checkbox liked function 

const Changelike = ((e)=>{
    setLiked(e.target.checked)

})

  return (
    <div>
    
    <p> {count}</p>
    <button onClick={Increm}>incrm</button>
    <button onClick={Decrem}>Decrem</button>
    <button onClick={Incrm_five}> incem 5 </button>
   
      <div>
      <form action="">
      
        <label htmlFor="">Enter your name : </label>
        <input  onChange={InputChange} type="text" name='fname'  />
        
        <p> name : {data}   </p>
        </form>

        <button onClick={()=>{setData("city")}}> reset  </button>
    
      </div>


      <label>
        <input 
        type="checkbox" 
        checked={liked}
        onChange={Changelike}
        
        />
        I liked this
      </label>

      <p>You this {liked ? "liked" : "not liked"}   </p>

      <p>
     
      
      </p>


 
       <input onChange={inputValue}  type="text" />

       <button onClick={incrmenAge}>Incrment age </button>
       <p> Hello , {values}  and age = {age}</p>
       

       <h1>  form with objects </h1>

       <label htmlFor="">first Name </label>
       <input  
       type="text" 
       value={form.firstName} 
      
       onChange={e =>{
        setForm({
         ...form,
          firstName : e.target.value

        })

       }}
      />


        <br /> <br /> 


       <label htmlFor="">Last Name </label>
       <input 
       type="text" 
       value={form.lastName}
       onChange={e => {
        setForm(
          {
            ...form,
            lastName:e.target.value
          }

        )

       
       }}
        />


       <br /> <br /> 



       <label htmlFor=""> Email </label>
       <input 
       type="email" 
       value={form.email} 
       onChange={e =>{
        setForm({
          ...form, 
           email:e.target.value
        })
       }}
       />



      <p> {form.firstName} and {form.lastName} </p>
      <p> {form.email}</p>







   

    </div>
  )
}

export default Hooks