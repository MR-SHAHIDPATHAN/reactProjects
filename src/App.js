import React from 'react'
import Navbar from './projects/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Logo from './projects/Navbar/Logo'
import Categories from './projects/Navbar/Categories'
import Course from './projects/Navbar/Menu/Course'
import Dashborad from './projects/Navbar/Menu/Dashborad'
import Pages from './projects/Navbar/Menu/Pages'
import Elements from './projects/Navbar/Menu/Elements'
import Blog from './projects/Navbar/Menu/Blog'

const App = () => {
  return (
    <div>
    

    <Navbar/>

   <Routes>

    <Route   path='categories'  element={<Categories/>}  />
    <Route   path='courses'  element={<Course/>}  />
    <Route   path='dashborad'  element={<Dashborad/>}  />
    <Route   path='pages'  element={<Pages/>}  />
    <Route   path='elements'  element={<Elements/>}  />
    <Route   path='blog'  element={<Blog/>}  />
    
   </Routes>



    
    
    </div>
  )
}

export default App