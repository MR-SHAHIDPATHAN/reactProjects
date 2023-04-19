import React from 'react'
import Categories from './Categories'
import './search.css'

const SearchBar = () => {
  return (
    <div>
    
      <div className='main'>
      
        <input type="search" placeholder='Search anything..' />
        <Categories/>

     
      </div>
    </div>
  )
}

export default SearchBar