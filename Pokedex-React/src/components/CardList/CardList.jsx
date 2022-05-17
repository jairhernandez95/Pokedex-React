import React from 'react'
import Card from '../Card/Card'

const CardList = ({pokemons})=> {

  return (
    <div className="Card-List">
      {
        pokemons.map((pokemon, index) => 
          {
            return(
               <Card key={index} pkmn={pokemon} />
            )
          }
        )
      }          
    </div>
  )
}

export default CardList

// 