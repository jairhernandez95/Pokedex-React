import React from 'react'
import Card from '../Card/Card'

const CardList = ({pokemons})=> {

  return (
    <div>
      {
        pokemons.map((pokemon) => 
          {
            console.log(pokemon);
            pokemon.map((pkmn, idx) => 
            {
              // console.log(pkmn);
              return <Card key={idx} pkmn={pkmn}/>
            })
          
        })
      }          
    </div>
  )
}

export default CardList