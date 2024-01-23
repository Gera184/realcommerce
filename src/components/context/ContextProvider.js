import React, { useEffect, useState } from 'react';
import Context from './Context';
import { useRouter } from 'next/navigation';

const ContextProvider = ({ children }) => {
    const [cities, setCities] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const router = useRouter()

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    const addToFavorites = (city) => {
        const isCityInFavorites = favorites.some((favCity) => favCity.cityName === city.cityName);

        if (!isCityInFavorites) {
            const newFavorites = [...favorites, city];
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            alert('City added to favorites!');
        } else {
            alert('City is already in favorites!');
        }
    };

    const removeFromFavorites = (cityName) => {
        const updatedFavorites = favorites.filter((city) => city.cityName !== cityName);
        setFavorites(updatedFavorites);

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        alert('City removed from favorites!');

        if (updatedFavorites.length === 0) {
            router.push("/")
        }

    };


    return (
        <Context.Provider value={{ cities, setCities, favorites, setFavorites, addToFavorites, removeFromFavorites }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
