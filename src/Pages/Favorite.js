import React, { useEffect } from 'react'
import Card from '../Component/Card'

const Favorite = () => {
    
   const articles = JSON.parse(localStorage.getItem('favorites'))
  return (
    <div className="App p-4  grid md:grid-cols-2 gap-2 lg:grid-cols-4 gap-4 w-100">
          {articles.map((article, index) => (
            

            <Card article={article} key={index} />
               
            
          ))}
        </div>
  )
}

export default Favorite
