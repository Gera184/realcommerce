"use client"
import { createContext } from 'react';

const Context = createContext({
    cities: [],
    setCities: () => { },
    favorites: [],
    setFavorites: () => { },
});

export default Context;
