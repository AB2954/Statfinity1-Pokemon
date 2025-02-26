import React from 'react'
import PokemonList from '../components/Pokemon/PokemonList'

async function PokemonListHome() {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000`)
  const jsonData = await data.json()
  return (
    <PokemonList data={jsonData}/>
  )
}

export default PokemonListHome