import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const AddtoCart = () => {
  return (
    <div>
    <Link to='cart'>   
     <ShoppingCartIcon/>
     </Link>
    
    </div>




  )
}

export default AddtoCart