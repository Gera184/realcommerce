"use client"
import Cities from '@/components/cities/Cities';
import Context from '@/components/context/Context';
import SearchBar from '@/components/searchBar/SearchBar';
import React, { useContext, useEffect, useState } from 'react'

const Favorites = () => {
  const { favorites } = useContext(Context);
  const [filteredFavorites, setFilteredFavorites] = useState(favorites);

  useEffect(() => {
    setFilteredFavorites(favorites);
  }, [favorites]);

  return (
    <>
      <SearchBar setCities={setFilteredFavorites} />
      <Cities cities={filteredFavorites} />
    </>
  );
};

export default Favorites;