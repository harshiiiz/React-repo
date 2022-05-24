
import React from 'react'
import Card from './Card'

function Cards() {
  const n = 10; 
 
  return (
    <>
    <div className = 'cardContainer'> {
      [...Array(n)].map((e, i) => 
      <Card 
      boxnum = {i+1}
      ellipsize = { (i + 1) % 2 ? 'This is a sentence that ellipsize': 'This is a sentence that doesn\'t ellipsize'}
      />)

    }
    
    </div>
  </>
      
  )
    
}

export default Cards