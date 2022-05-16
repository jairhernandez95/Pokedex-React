import './App.css'
import SearchBox from './components/SearchBox/SearchBox'
import CardList from './components/CardList/CardList'
import { useState, useEffect } from 'react'

function App() {

  const [pokemons, setPokemons] = useState([
    {
      id: 1,
      numero: 1,
      fecha: '02 de Febrero de 2022',
      terminado: true,
    },
    {
      id: 2,
      numero: 2,
      fecha: '10 de Febrero de 2022',
      terminado: false,
    },
    {
      id: 3,
      numero: 3,
      fecha: '11 de Febrero de 2022',
      terminado: false,
    }
  ])

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=1126")
  //     .then((response) => response.json())
  //     .then((data) => { 
  //       setPokemons([...pokemons,data.results]);
  //     })
  // }, []);

  const showAllPokemons = () => {
    console.log(pokemons)
  }
  
  const pokemonToSearch = (event) => {
    const pokemon = event.target.value;
  };
  
  return (
    <div className="App">
      <SearchBox onSearch={showAllPokemons}/>
      <CardList pokemons={pokemons}/>
    </div>
  )
}

export default App
