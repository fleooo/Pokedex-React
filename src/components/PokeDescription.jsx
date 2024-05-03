import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';

const PokeDescription = ({ pokemon }) => {
  const [pokemons, setPokemons] = useState('');

  useEffect(() => {
    axios.get('https://pokebuildapi.fr/api/v1/pokemon/')
     .then((res) => {
      pokemonData(res.data)
     })
    },[]);
return (
  <>
    <Navbar />
  </>
)
  
};


export default PokeDescription