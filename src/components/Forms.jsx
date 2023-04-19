import { useState } from 'react';

function Forms () {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [submitted, setSubmitted] = useState(false);

 




const FirstNameChange = ((e)=>{
  setName(e.target.value)
     

})


const EmailChange = ((e)=>{
  setEmail(e.target.value)

})


const DataSubmit = ((e)=>{
  e.preventDefault();
  setSubmitted(true);

})









  return (
    <div>
      <form onSubmit={DataSubmit}>


        <label htmlFor="name">Name:</label>
       <input type="text" value={name} onChange={FirstNameChange}/>


        <label htmlFor="email">Email:</label>
        <input type="email" value={email}  onChange={EmailChange}/>

        <button type="submit">Submit</button>


      </form>


    {  submitted &&   (  <div>
      <p> {name} </p>
      <p> {email}</p>
      
      </div>)}

   


     
    </div>
  );
}


export default Forms;