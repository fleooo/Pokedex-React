import { useEffect, useState,useRef } from 'react'
import './App.css'
import PokemonApi from './components/PokemonApi'
import Navbar from './components/Navbar'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
  axios.get ('https://pokebuildapi.fr/api/v1/pokemon/limit/100').then(res=> {
    setPokemon(res.data)

  })},[])

  return (
    <>
      <div><Navbar/></div>
      <div className='menupoke'><PokemonApi pokemon={pokemon}/></div>
    </>
  )
}

export default App
