import React from 'react'
import Card from '../Card/Card'

const CardList = ({pokemons}) => {
  
  return (
    <>
      {pokemons.map((pokemon, index) => (
          <Card key={index} element={pokemon}/>
        ))}          
    </>
  )
}

export default CardList