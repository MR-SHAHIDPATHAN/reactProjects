import React, { useState } from 'react'

const FormHooks = () => {



    const [ form , setform ] = useState({
        FirstName : "demo",
        LastName : "demo2",
        Emailid:"abcd@g.com"
    })

    const getFirstName = ((e)=>{
        setform({...form, FirstName:e.target.value})

    })

    const getLastName = ((e)=>{
        setform({...form, LastName:e.target.value})

    })

    const getEmailid = ((e)=>{
        setform({...form ,Emailid:e.target.value })
       

    })


  return (
    <div>
     
    <label htmlFor="">First Name : 
     <input type="text" 
     onChange={getFirstName} />
    </label>




    <label htmlFor="">last Name : </label>
    <input type="text" onChange={getLastName} />


    <label htmlFor="">Email id : 
    <input type="email" onChange={getEmailid} />
    </label>



    <p>  FirstName : {form.FirstName}   </p>
    <p>  LastName : {form.LastName}  </p>
    <p>  Email id : { form.Emailid} </p>
    
    
    </div>
  )
}

export default FormHooks