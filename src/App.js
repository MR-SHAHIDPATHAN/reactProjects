import React from 'react'
import Navbar from './projects/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Categories from './projects/Navbar/Categories'
import Course from './projects/Navbar/Menu/Course'
import Dashboard from './projects/Navbar/Menu/Dashboard'
import Pages from './projects/Navbar/Menu/Pages'
import Elements from './projects/Navbar/Menu/Elements' 
import Blog from './projects/Navbar/Menu/Blog'
import Register from './projects/Navbar/Register'
import AddtoCart from './projects/Navbar/AddtoCart'
import Main from './projects/Main/Main'





const App = () => {
  return (
    <div>
    <Navbar/>
    <Main/>

    <Routes>
      <Route path='categories' element={ <Categories/>  } />
      <Route path='courses' element={ <Course/>  } />
      <Route path='dashboard' element={ <Dashboard/>  } />
      <Route path='pages' element={ <Pages/>  } />
      <Route path='elements' element={ <Elements/>  } />
      <Route path='blog' element={ <Blog/>  } />
      <Route path='register' element={ <Register/>  } />
      <Route path='cart' element={ <AddtoCart/>  } />

    
     
    </Routes>
    
    
    
    </div>
  )
}

export default App