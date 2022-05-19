import React from 'react'
import '../Card/Card.style.css'
import { useState, useEffect } from 'react'

function Card ({pkmn}) {

  let link = pkmn.url;

  const [pokemon, setPokemon] = useState(null);
  const [existStyles, setExistStyles] = useState(false);

  useEffect(() => {

    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data)
        setExistStyles(true)
      })
  },[])

  return (
    <div>
      {existStyles && <div className='Card' style={pokemon.types[0].type.name == "normal" ? {backgroundColor:"DarkKhaki"} : pokemon.types[0].type.name == "fighting" ? {backgroundColor:"orange"} : pokemon.types[0].type.name == "flying" ? {backgroundColor:"yellowgreen"} : pokemon.types[0].type.name == "poison" ? {backgroundColor:"MediumPurple"} : pokemon.types[0].type.name == "ground" ? {backgroundColor:"Peru"} : pokemon.types[0].type.name == "rock" ? {backgroundColor:"gray"} : pokemon.types[0].type.name == "bug" ? {backgroundColor:"MediumOrchid	"} : pokemon.types[0].type.name == "ghost" ? {backgroundColor:"LightSlateGray"} : pokemon.types[0].type.name == "steel" ? {backgroundColor:"DimGray"} : pokemon.types[0].type.name == "fire" ? {backgroundColor:"IndianRed	"} : pokemon.types[0].type.name == "water" ? {backgroundColor:"DodgerBlue"} : pokemon.types[0].type.name == "grass" ? {backgroundColor:"MediumSeaGreen"} : pokemon.types[0].type.name == "electric" ? {backgroundColor:"PaleGoldenrod	"} : pokemon.types[0].type.name == "psychic" ? {backgroundColor:"SlateBlue"} : pokemon.types[0].type.name == "ice" ? {backgroundColor:"LightSkyBlue"} : pokemon.types[0].type.name == "dragon" ? {backgroundColor:"LightSalmon"} : pokemon.types[0].type.name == "dark" ? {backgroundColor:"Indigo"} : pokemon.types[0].type.name == "fairy" ? {backgroundColor:"PeachPuff"} : pokemon.types[0].type.name == "unknown" ? {backgroundColor:"MidnightBlue"} : pokemon.types[0].type.name == "shadow" ? {backgroundColor:"SlateGray"} : {backgroundColor:"black"}}>
      
        {pokemon && <p>No. {pokemon.order}</p>}
        <h1>{pkmn.name}</h1>
        {pokemon && <img src={pokemon.sprites.front_default} alt="" />}
      </div>}
    </div>
  )

}

export default Card

