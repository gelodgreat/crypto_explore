import React, { useState } from 'react';
import AppContext from 'context/AppContext';
import HomeScreen from './Home.screen';
import { AppContext as AppCtxType } from 'types/AppContext.types';
import { HomePrivateProps } from './Home.props';
import { NextPage } from 'next';

const HomeProvider = ({ children }) => {
  const [busdInput, setBUSDInput] = useState('');
  const [nepInput, setNepInput] = useState('');
  const [openConnectModal, setOpenConnectModal] = useState(false);

  const ctx: AppCtxType = {
    busdInput,
    setBUSDInput,
    nepInput,
    setNepInput,
    openConnectModal,
    setOpenConnectModal,
  };
  const generatedProps: HomePrivateProps = {};

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
};
const Home: NextPage = () => {
  return (
    <HomeProvider>
      <HomeScreen />
    </HomeProvider>
  );
};

export default Home;
