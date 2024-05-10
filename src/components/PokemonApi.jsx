
import React from 'react'
import { Link } from 'react-router-dom'


const PokemonApi = ({ pokemon }) => {
  return (

    <>
      <div className='bloc row row-cols-lg-6'>
        {pokemon.map((p) => (
          <div className='col carte rounded-3  m-3' key={p.id}>
            <img className="imgpoke rounded-3 m-3" src={p.image
            } width={200} alt="" />
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

