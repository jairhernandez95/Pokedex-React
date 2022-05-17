import './App.css'
import SearchBox from './components/SearchBox/SearchBox'
import CardList from './components/CardList/CardList'
import { useState, useEffect } from 'react'


function App() {

  const [pokemons, setPokemons] = useState([
    // {
    //   id: 1,
    //   numero: 1,
    //   fecha: '02 de Febrero de 2022',
    //   terminado: true,
    // },
    // {
    //   id: 2,
    //   numero: 2,
    //   fecha: '10 de Febrero de 2022',
    //   terminado: false,
    // },
    // {
    //   id: 3,
    //   numero: 3,
    //   fecha: '11 de Febrero de 2022',
    //   terminado: false,
    // }
  ])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20?offset=20")
      .then((response) => response.json())
      .then((data) => { 
        setPokemons([data.results]);
      })
  }, []);

  const showAllPokemons = () => {
    console.log("hello")
  }
  
  const pokemonToSearch = (event) => {
    const pokemon = event.target.value.toLowerCase();
    console.log(pokemon)
  };

  return (
    <div className="App">
      <SearchBox onSearch={pokemonToSearch}/>
      {pokemons.length > 0 ? <CardList pokemons={pokemons}/>:"No hay data por mostrar"}
    </div>
  )
}

export default App
