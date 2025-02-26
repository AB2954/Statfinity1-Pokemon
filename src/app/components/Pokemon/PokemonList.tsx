"use client"

import { Search } from 'lucide-react'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

type PokemonData = {
    name: string;
    url: string
}

type PokemonListProps = {
    count: number;
    next: string | null;
    previous: string | null
    results : PokemonData[]
}

function PokemonList({data}:{data: PokemonListProps}) {
  // Define the state variables
    const [pageDetails,setPageDetails] = useState({
      currentPage:1,
      perPageEntries: 25,
    })
    const [PokemonList,setPokemonList] = useState<PokemonData[] | []>([])
    const [isSearching,setIsSearching] = useState(false)
    
    // This function filters the data based on page details
    const filterData = useCallback(() => {
      const filteredData = data.results.slice((pageDetails.currentPage-1) * pageDetails.perPageEntries,pageDetails.currentPage * pageDetails.perPageEntries)
      setPokemonList(filteredData)
    },[data.results,pageDetails])

    // Update data based on the pageDetails
    useEffect(()=>{
      filterData()
    },[filterData, pageDetails.currentPage])

    // This function handles the change of page
    const changePage = async(type:string) => {
      // Changes to next page 
      if(type=="next" && pageDetails.currentPage < (Math.ceil(data.count/pageDetails.perPageEntries))){
        setPageDetails((prev)=>({
          ...prev,
          currentPage: prev.currentPage + 1,
        }))
      }
      // Changes to previous page
      if(type=="previous" && pageDetails.currentPage > 1){
        setPageDetails((prev)=>({
          ...prev,
          currentPage: prev.currentPage - 1,
        }))
      }
    }

    // This function handle the search functionality
    const handleSearch = (searchString:string) => {
      // Check if the string is more than 2 characters then search the list for matching results
      if(searchString.length>2){
        setIsSearching(true)
        const filterResults = data.results.filter(pokemon=>{
          // Match the list of pokemon based on search string case-insensitive
          return pokemon.name.toLowerCase().includes(searchString.replaceAll(" ","-").toLowerCase())
        })
        // Update the list of the searched results
        setPokemonList(filterResults)
      }else{
        // Set the previous list if the search is not available
        setIsSearching(false)
        setPageDetails(prev=>({
          ...prev,
          currentPage:pageDetails.currentPage,
        }))
      }
    }
  return (
    <div className='h-screen w-full flex flex-col bg-red-50 text-slate-800 p-2'>
      <div className='flex items-center justify-center h-10'>
        <div className='flex items-center justify-center w-[100%] md:w-[50%] bg-white border rounded border-red-300'>
        <input type='text' placeholder='Search your Pokemon' className='w-[100%] rounded p-2 focus:outline-0' onChange={(e)=>{handleSearch(e.target.value)}}/>
        <Search className='mx-2 hover:cursor-pointer hover:scale-125 hover:text-red-500'/>
        </div>
      </div>
      <div className='grow overflow-auto'>
        <h2 className='text-2xl font-bold text-red-600'>Choose your Pokemon</h2>
        <div className='grid grid-cols-2 md:grid-cols-5 px-2 my-3'>
        {PokemonList && PokemonList.length ? PokemonList.map((pokemon,index) => {
          return <Link href={`pokemon/${pokemon.name}`} key={index} className='h-24 bg-white m-2 p-2 border rounded-md shadow-md text-2xl font-semibold capitalize hover:scale-105 hover:bg-red-500 hover:text-white place-content-evenly text-center'>
            {pokemon.name.replaceAll("-"," ")}
          </Link>
        }):
        <p className='text-xl font-medium'>No Results</p>
      }
        </div>
      </div>
      <div className='flex justify-center gap-4 my-4'>
        <button className='h-10 bg-white text-lg font-semibold shadow border border-red-200 rounded-md px-4 md:px-16 hover:bg-red-500 hover:text-white hover:scale-105' onClick={()=>{if(!isSearching) changePage("previous")}}>Previous</button>
        <button className='h-10 bg-white text-lg font-semibold shadow border border-red-200 rounded-md px-4 md:px-16 hover:bg-red-500 hover:text-white hover:scale-105' onClick={()=>{if(!isSearching) changePage("next")}}>Next</button>
      </div>
    </div>
  )
}

export default PokemonList