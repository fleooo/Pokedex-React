import { useEffect, useState } from 'react'
import './App.css'
import PokemonApi from './components/PokemonApi'
import Navbar from './components/Navbar'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/100')
      .then((res) => {
        setPokemon(res.data);
        setFilteredPokemon(res.data);
      })
      
  }, []);

  const handleSearch = (query) => {
    if (query.trim() === '') {
      setFilteredPokemon(pokemon);
    } else {
      const filtered = pokemon.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPokemon(filtered);
    }
  };

  return (
    <>
      <div><Navbar onSearch={handleSearch}/></div>
      <div className='menupoke'>
        <PokemonApi pokemon={filteredPokemon}/>
      </div>
    </>
  )
}

export default App
