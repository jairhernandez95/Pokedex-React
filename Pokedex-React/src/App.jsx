import './App.css'
import SearchBox from './components/SearchBox/SearchBox'
import CardList from './components/CardList/CardList'
import { useState, useEffect } from 'react'


function App() {

  const [pokemons, setPokemons] = useState([])
  const [allPokemons, setAllPokemons] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => response.json())
      .then((data) => { 
        setPokemons(data.results);
        setAllPokemons(data.results);
      })
  }, []);
  
  const pokemonToSearch = (event) => {
    const pokemon = event.target.value.toLowerCase();
    if(pokemon === "")
    {
      setPokemons(allPokemons)
    }
    else
    {
      let helperArray = pokemons.filter((element)=>element.name.includes(pokemon))
      setPokemons(helperArray)
    }
  };

  return (
    <div className="App">
      <SearchBox onSearch={pokemonToSearch}/>
      {pokemons.length > 0 ? <CardList pokemons={pokemons} className={'Card-List'}/>:"No hay data por mostrar"}
    </div>
  )
}

export default App
