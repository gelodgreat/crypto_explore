import React, { useState } from 'react';
import AppContext from 'context/AppContext';
import HomeScreen from './Home.screen';

const Home = () => {
  const [busdInput, setBUSDInput] = useState('');
  const [nepInput, setNepInput] = useState('');
  return (
    <AppContext.Provider value={{ busdInput, setBUSDInput, nepInput, setNepInput }}>
      <HomeScreen />
    </AppContext.Provider>
  );
};

export default Home;
