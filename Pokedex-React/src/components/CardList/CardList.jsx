import React from 'react'
import Card from '../Card/Card'

const CardList = ({pokemons})=> {

  return (
    <div className="Card-List">
      {
        pokemons.map((pokemon) => 
          {
            return(
               <Card key={pokemon.url} pkmn={pokemon} />
            )
          }
        )
      }          
    </div>
  )
}

export default CardList

// 