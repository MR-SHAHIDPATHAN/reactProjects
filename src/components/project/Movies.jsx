import React from 'react'
import MoviesCards from './MoviesCards'
import MoviesData from './MoviesData'

const Movies = () => {
  return (
    <div>

    
    
     <MoviesCards
     moviesImg ={MoviesData[0].moviesImg}
     moviesName={MoviesData[0].moviesName}
     moviesCate={MoviesData[0].moviesCate}
 
    />
     <MoviesCards
     moviesImg ={MoviesData[1].moviesImg}
     moviesName={MoviesData[1].moviesName}
     moviesCate={MoviesData[1].moviesCate}
 
    />





    
    
    </div>
  )
}

export default Movies