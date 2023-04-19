import React from "react";


const Netflix = ((props)=>{
    return(
        <div>
        
        
          <div>
            <img src={props.movieImg} alt="" width={500} />
            <h2>{props.moviesCate} </h2>
            <h2>  {props.moviesName} </h2>
          </div>

          

  

        </div>
    )
})

export default Netflix;