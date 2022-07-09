import React, { useReducer, useState } from 'react';
import AppContext from 'context/AppContext';
import HomeScreen from './Home.screen';
import { AppContext as AppCtxType } from 'types/AppContext.types';
import { HomePrivateProps } from './Home.props';
import { NextPage } from 'next';

const HomeProvider = ({ children }) => {
  const [busdInput, setBUSDInput] = useState('');
  const [nepInput, setNepInput] = useState('');
  const [openConnectModal, setOpenConnectModal] = useState(false);

  const openModal = () => {
    setOpenConnectModal(!openConnectModal);
  };

  const ctx: AppCtxType = {
    busdInput,
    setBUSDInput,
    nepInput,
    setNepInput,
    openConnectModal,
    openModal,
    setOpenConnectModal,
  };

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
};

const Home: NextPage = () => {
  const generatedProps: HomePrivateProps = {};

  return (
    <HomeProvider>
      <HomeScreen {...generatedProps} />
    </HomeProvider>
  );
};

export default Home;
