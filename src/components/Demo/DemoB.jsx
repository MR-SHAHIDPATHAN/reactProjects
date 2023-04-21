import React from 'react'
import DemoC from './DemoC'

const DemoB = ({courseName}) => {
  return (
    <div>
    
      <DemoC 
      firstName="AVANTIKA" 
      college="SGM" 
      cl={courseName} />
    
    </div>
  )
}

export default DemoB