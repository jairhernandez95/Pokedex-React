import './App.css'
import SearchBox from './components/SearchBox/SearchBox'
import Card from './components/Card/Card'
import { useState, useEffect } from 'react'

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => response.json())
      .then((data) => { 
        setPokemons([...pokemons,data.results]);
      })
  }, []);

  const showAllPokemons = () => {
    console.log(pokemons)
  }
  
  const pokemonToSearch = (event) => {
    const pokemon = event.target.value;
    console.log(pokemon);
    
  };
  
  return (
    <div className="App">
      <SearchBox onSearch={showAllPokemons}/>
      {() => {pokemons.map()}}
    </div>
  )
}

export default App
