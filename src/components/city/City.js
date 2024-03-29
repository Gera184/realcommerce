import React, { useContext } from 'react';
import "./City.css";
import Context from '../context/Context';
import Image from 'next/image';
import heart_added from '../../../public/heart_added.svg'
import heart_defualt from '../../../public/heart.svg'

const City = ({ selectedCity, setSelectedCity }) => {
  const { cityName, weatherText, temperature } = selectedCity;
  const { favorites, addToFavorites, removeFromFavorites } = useContext(Context);

  const isInFavorites = favorites.some((favCity) => favCity.cityName === cityName);

  const handleAddToFavorites = () => {
    if (isInFavorites) {
      removeFromFavorites(selectedCity.cityName);
      setSelectedCity({});

    } else {
      addToFavorites(selectedCity);
    }
  };

  const isCitySelected = Object.keys(selectedCity).length > 0;

  return (
    isCitySelected && (
      <div className='city_wrapper'>
        <div className='details_wrapper'>
          <div className='city_details'>
            <span>{cityName}</span>
          </div>
          <div className='weather_details'>
            <span>{temperature?.Value || selectedCity?.temperature} </span>
            <span>{weatherText} </span>
          </div>
        </div>
        <div className='add_to_favorites'>
          <button
            className={isInFavorites ? 'removeFromFavorites' : 'addToFavorites'}
            onClick={handleAddToFavorites}
          >
            {isInFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
          <Image
            src={isInFavorites ? heart_added : heart_defualt}
            alt="Heart Icon"
            className="img_icon"
          />
        </div>
      </div>
    )
  );
};

export default City;
