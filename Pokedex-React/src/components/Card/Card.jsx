import React from 'react'
import '../Card/Card.style.css'

const Card = ({pkmn}) => {
  console.log("DESDE CARD")
  console.log(pkmn)
  
  return (
    <div>
      <p>{pkmn.name}</p>
    </div>
  )
}

export default Card