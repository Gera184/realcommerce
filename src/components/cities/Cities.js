import React, { useState } from 'react'
import "./Cities.css";
import { config } from '../apiService/config';
import fetchData from '../apiService/fetchData';
import City from '../city/City';
import { usePathname } from 'next/navigation';

const Cities = ({ cities }) => {
  const [selectedCity, setSelectedCity] = useState({})
  const [isSelected, setIsSelected] = useState(false)
  const router = usePathname();

  const handleOnClick = (city) => {
    const { Key: locationKey, LocalizedName, cityName } = city;

    if (router === '/favorites') {
      const selectedCityTemp = {
        cityName: LocalizedName || cityName,
        weatherText: city.weatherText,
        temperature: city.temperature.Value,
      };

      setSelectedCity(selectedCityTemp);
      setIsSelected(true);

    } else {
      const currentWeatherEndpoint = config.currentWeather(locationKey);

      fetchData(currentWeatherEndpoint, (data, error) => {

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          const selectedCityTemp = {
            cityName: LocalizedName || cityName,
            weatherText: data[0].WeatherText,
            temperature: data[0].Temperature.Metric,
          };

          setSelectedCity(selectedCityTemp);
          setIsSelected(true);
        }
      });
    }

  };


  const mappedCities = cities?.map(({ LocalizedName, cityName, ...rest }, index) => {
    const label = LocalizedName || cityName;

    return (
      <button onClick={() => handleOnClick({ LocalizedName, cityName, ...rest })} key={index}>
        {label}
      </button>
    );
  });



  return (
    <div className='cities_wrapper'>
      <div className='selected_city_container'>
        {isSelected && (
          <City selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
        )}
      </div>
      <div className='cities_list_container' >
        <div className="button_wrapper">
          {mappedCities}
        </div>
      </div>
    </div>
  )
}

export default Cities
