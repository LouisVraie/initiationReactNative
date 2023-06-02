/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './Routes';

export const UserContext = createContext({});
export const AppData = createContext({});

export default function App(): JSX.Element {

  const [user, setUser] = useState();
  const [favorites, setFavorites] = useState([]);
  const [listing, setListing] = useState([]);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('user', user);
  }, [user]);
  
  useEffect(() => {
    console.log('categories', categories);
    console.log('products', products);
  }, [categories, products]);
  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{ user, setUser, favorites, setFavorites, listing, setListing }}>
        <AppData.Provider value={{ categories, setCategories, products, setProducts }}>
          <Routes/>
        </AppData.Provider>
      </UserContext.Provider>
    </SafeAreaProvider>
  );
};


