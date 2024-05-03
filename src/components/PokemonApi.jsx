
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const PokemonApi = ({pokemon}) => {
        return (
        
    <>
    <div className='row'>
      {pokemon.map(p=>(
        <div className='col carte rounded-3  m-3' key={p}>
          <img className="imgpoke" src={p.image} width={200} alt="" />
          <p className='name'>{p.name}</p>
          <p className='idpoke rounded-pill'>#{p.id}</p>
          <Link to={`/pokemon/${p.id}`}><button type='button' className='btn bttn'>VIEW DETAILS</button></Link>
        </div>
      ))}
      </div>
    </>
  )
}


export default PokemonApi

