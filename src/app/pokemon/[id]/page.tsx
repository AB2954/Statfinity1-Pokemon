import PokemonDetails from '@/app/components/Pokemon/PokemonDetails'
export default async function PokemonWithId({params}:{params:{id:string}}) {
  const {id} = await params
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  if(!data.ok){
    throw new Error('Pokemon not found')
  }
  const pokemonDetails = await data.json()
  return (
    <div>
      <PokemonDetails details={pokemonDetails}/>
    </div>
  )
}