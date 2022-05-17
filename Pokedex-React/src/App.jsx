import './App.css'
import SearchBox from './components/SearchBox/SearchBox'
import CardList from './components/CardList/CardList'
import { useState, useEffect } from 'react'


function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
      .then((response) => response.json())
      .then((data) => { 
        setPokemons(data.results);
      })
  }, []);

  // const showAllPokemons = () => {
    
  // }
  
  const pokemonToSearch = (event) => {
    const pokemon = event.target.value.toLowerCase();
    console.log(pokemon)
  };

  return (
    <div className="App">
      <SearchBox onSearch={pokemonToSearch}/>
      {pokemons.length > 0 ? <CardList pokemons={pokemons} className={'Card-List'}/>:"No hay data por mostrar"}
    </div>
  )
}

export default App
