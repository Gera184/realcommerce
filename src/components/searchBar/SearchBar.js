import React, { useContext, useEffect } from 'react';
import './SearchBar.css';
import Link from 'next/link';
import { config } from '../apiService/config';
import fetchData from '../apiService/fetchData';
import Context from '../context/Context';
import { usePathname } from 'next/navigation';


const SearchBar = ({ setCities }) => {
  const { favorites } = useContext(Context);
  const isFavoritesExist = favorites.length > 0

  const router = usePathname();


  const handleFavoritesSearch = (cityName) => {
    const filteredCities = favorites.filter((favorite) =>
      favorite.cityName.toLowerCase().includes(cityName.toLowerCase())
    );

    setCities(filteredCities);
  };
 


  const handleDefaultSearch = (cityName) => {
    const autocompleteEndpoint = config.autocomplete(cityName);
    fetchData(autocompleteEndpoint, (data, error) => {
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setCities(data);
      }

    });
  }

  const handleOnChange = (e) => {
    const cityName = e.target.value;

    if (router === '/favorites') {
      handleFavoritesSearch(cityName)
    } else {
      handleDefaultSearch(cityName);
    }
  };

  useEffect(() => {
    if (router === '/') {
      setCities([])
    }
  }, [])

  return (
    <div className="search_wrapper">
      {isFavoritesExist && (
        <Link href={router === '/favorites' ? '/' : '/favorites'}>
          <button>{router === '/favorites' ? 'Home' : 'Favorites'}</button>
        </Link>
      )}

      <div className='search_container'>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
