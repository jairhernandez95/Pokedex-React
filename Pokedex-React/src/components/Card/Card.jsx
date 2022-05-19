import React from 'react'
import '../Card/Card.style.css'
import { useState, useEffect } from 'react'

function Card ({pkmn}) {

  let link = pkmn.url;

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data)
      })
  },[])

  return (
    <div>
    {/* <div className='Card'style={pokemon.types[0].type.name == "normal" ? {backgroundColor:"DarkKhaki"} : pokemon.types[0].type.name == "fighting" ? {backgroundColor:"orange"} : pokemon.types[0].type.name == "flying" ? {backgroundColor:"yellowgreen"} : pokemon.types[0].type.name == "poison" ? {backgroundColor:"MediumPurple"} : pokemon.types[0].type.name == "ground" ? {backgroundColor:"Peru"} : pokemon.types[0].type.name == "rock" ? {backgroundColor:"gray"} : pokemon.types[0].type.name == "bug" ? {backgroundColor:"MediumOrchid	"} : pokemon.types[0].type.name == "ghost" ? {backgroundColor:"LightSlateGray"} : pokemon.types[0].type.name == "steel" ? {backgroundColor:"DimGray"} : pokemon.types[0].type.name == "fire" ? {backgroundColor:"IndianRed	"} : pokemon.types[0].type.name == "water" ? {backgroundColor:"DodgerBlue"} : pokemon.types[0].type.name == "grass" ? {backgroundColor:"MediumSeaGreen"} : pokemon.types[0].type.name == "electric" ? {backgroundColor:"PaleGoldenrod	"} : pokemon.types[0].type.name == "psychic" ? {backgroundColor:"SlateBlue"} : pokemon.types[0].type.name == "ice" ? {backgroundColor:"LightSkyBlue"} : pokemon.types[0].type.name == "dragon" ? {backgroundColor:"LightSalmon"} : pokemon.types[0].type.name == "dark" ? {backgroundColor:"Indigo"} : pokemon.types[0].type.name == "fairy" ? {backgroundColor:"PeachPuff"} : pokemon.types[0].type.name == "unknown" ? {backgroundColor:"MidnightBlue"} : pokemon.types[0].type.name == "shadow" ? {backgroundColor:"SlateGray"} : {backgroundColor:"black"}}
    > */}
      {/* <p>No. {pokemon.order}</p> */}
      {/* <img src={pokemon.sprites.front_default} alt="" /> */}
      <h1>{pkmn.name}</h1>
      {/* <p>Type: {pokemon.types[0].type.name}</p> */}
      {/* {pokemon.types.map((type) => { return(<p>{type.type.name}</p>)})} */}
      {/* {pokemon.abilities.map((ability) => { return(<p>{ability.ability.name}</p>)})} */}
      {/* <p>{pkmn.url}</p> */}
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

