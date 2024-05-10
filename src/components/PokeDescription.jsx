import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const PokeDescription = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const pokemonId = window.location.pathname.split('/').pop();
    axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`)
      .then((res) => {
        setPokemon(res.data);
      })
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        {pokemon ? (
          <div >
            <div className="imgdes">
              <img className='m-3' width={400} src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className='imgdes'>
              <h2>{pokemon.name}</h2>
              <p>#{pokemon.id}</p>
              
            </div>
            <div className='poketype'>
            <img width={100}src={pokemon.apiTypes[0].image}/>
            <img width={100} src={pokemon.apiTypes[1]?.image}/> 
            </div>
            <hr />
            <div className='row'>
              <tr className='carte2 rounded-3 col m-5 pt-3'> <h4>Abilities :</h4>
                <tr><p>lorem ipsum</p></tr>
                <tr><p>lorem ipsum</p></tr>
                <tr><p>lorem ipsum</p></tr>
                <tr><p>lorem ipsum</p></tr>
                <tr><p>lorem ipsum</p></tr>
              </tr>

              <tr className='carte2 rounded-3 col m-5 pt-3'><h4>Stats:</h4>
                <tr><p>HP : {pokemon.stats.HP} </p></tr>
                <tr><p>Attack : {pokemon.stats.attack}</p></tr>
                <tr><p>Defense : {pokemon.stats.defense}</p></tr>
                <tr><p>Special Attack : {pokemon.stats.special_attack} </p></tr>
                <tr><p>Special Defense : {pokemon.stats.special_defense}</p></tr>
                <tr><p>Speed : {pokemon.stats.speed}</p></tr>

              </tr>

              <tr className='carte2 rounded-3 col m-5 pt-3'><h4>Moves :</h4>
                <tr><p>lorem ipsum</p></tr>
                <tr><p>lorem ipsum</p></tr>
                <tr><p>lorem ipsum</p></tr>
                <tr><p>lorem ipsum</p></tr>
                <tr><p>lorem ipsum</p></tr>
              </tr>
            </div>

          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default PokeDescription