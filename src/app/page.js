"use client"
import Cities from '@/components/cities/Cities'
import Context from '@/components/context/Context';
import SearchBar from '@/components/searchBar/SearchBar'
import React, { useContext } from 'react'

export default function Home() {
  const { cities, setCities } = useContext(Context);

  return (
    <>
      <SearchBar setCities={setCities} />
      <Cities cities={cities} />
    </>
  )
}
