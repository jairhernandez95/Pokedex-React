import React from 'react'
import '../Card/Card.style.css'
import { useState, useEffect } from 'react'

function Card ({pkmn}) {

  let link = pkmn.url;

  const [pokemon, setPokemon] = useState([]);

  async function getData ()
  {
    useEffect(() => {
      fetch(link)
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data)
        })
    },[])
  }

  return (
    <div className='Card'>
      {/* <img src={pokemon.sprites.front_default} alt="" /> */}
      <h1>{pkmn.name}</h1>
      {/* <h3>No. {pokemon.id}</h3>
      <h5>Type: {typePokemon}</h5> */}
      {/* <div>
        {pokemon.abilities.map(() => {
            return(
            <li>{ability.name}</li>
            ) 
          })
        }
      </div> */}
    </div>
  )
}

export default Card

