"use client"
import React from 'react'

function PokemonDetails({details}:{details: Record<string, any>}) {
  return (
    <div className='m-0 md:flex h-screen bg-black'>
      <div className='bg-red-100 w-[100%] md:w-[40%] md:m-2 object-cover'>
      <h2 className='text-4xl font-semibold text-red-500 first-letter:capitalize px-2 mb-4 md:mb-16 [text-shadow:_0_4px_4px_rgb(99_99_99_/_0.8)]'>{details.name}</h2>
        <img src={details.sprites.other['official-artwork'].front_default || `/Image_not_available.png`} alt={`No image available for ${details.id} `}
        width={500}
        height={600}
        />
      </div>
      <div className='bg-blue-100 text-slate-50 w-[100%] md:w-[60%] md:m-2 grid grid-cols-2 gap-3 p-2'>
        <div className='bg-slate-500 rounded col-span-2 p-2'>
          <p className='text-2xl font-semibold mb-2'>Abilities</p>
        <div className='w-full text-black grid grid-cols-2 md:grid-cols-3 gap-2'>
          {details.abilities.map((ability,index)=>{
            return <div key={index} className='text-red-500 bg-white rounded shadow first-letter:capitalize p-2 h-auto text-xl font-[550] text-center'>{ability.ability.name}</div>
          })
          }
        </div>
        </div>
        <div className='bg-slate-500 rounded p-2 col-span-2 md:col-span-1'>
          <p className='text-2xl font-semibold mb-2'>Type</p>
          <div className='grid grid-cols-2 md:grid-cols-3 overflow-auto gap-1'>
          {details.types.map((type,index)=>{
            return <div key={index} className=''>
              <p className='first-letter:capitalize bg-white px-5 py-2 rounded text-slate-800 text-center'>{type.type.name}</p>
            </div>
          })}
          </div>
        </div>
        <div className='bg-slate-500 rounded p-2 col-span-2 md:col-span-1'>
          <p className='text-2xl font-semibold mb-2'>Stats</p>
            {details.stats.map((stat,index)=>{
             return <div className='grid grid-cols-3' key={index}>
                  <div className='col-span-2 md:col-span-1 first-letter:capitalize font-[550]'>{stat.stat.name}</div>
                  <div className='col-span-1 md:col-span-2 mx-5'>{stat.base_stat}</div>
              </div>
            })}
        </div>
        <div className='bg-slate-500 rounded col-span-2 p-2 overflow-auto'>
          <p className='text-2xl font-semibold mb-1'>Moves</p>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-1'>
          {details.moves.map((move,index)=>{
            return <div key={index} className='shadow-lg hover:scale-105 hover:ring-2 hover:ring-red-400 hover:font-semibold hover:text-md hover:bg-red-100 bg-slate-100 text-orange-700 rounded p-1 first-letter:capitalize'>{move.move.name}</div>
          })}
          </div>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails