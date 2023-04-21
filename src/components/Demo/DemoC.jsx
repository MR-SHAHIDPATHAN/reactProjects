import React from 'react'
import DemoD from './DemoD'

const DemoC = ({firstName,college ,cl }) => {
  return (
    <div>
    
      <DemoD 
      lastName ="BABAR"
       fn={firstName} 
       clg={college} 
       courseNames={cl}  />
    </div>
  )
}

export default DemoC