import React, { useReducer, useState, useEffect, useContext } from 'react';
import AppContext from 'context/AppContext';
import HomeScreen from './Home.screen';
import { AppContext as AppCtxType } from 'types/AppContext.types';
import { HomePrivateProps } from './Home.props';
import { NextPage } from 'next';
import { GetNEPVal } from 'utils/GetAPI';

const HomeProvider = ({ children }) => {
  const [busdInput, setBUSDInput] = useState('');
  const [nepInput, setNepInput] = useState('');
  const [openConnectModal, setOpenConnectModal] = useState(false);
  const [nepBUSDVal, setNEPBUSDVal] = useState<number>(0);

  const openModal = () => {
    setOpenConnectModal(!openConnectModal);
  };

  useEffect(() => {
    const load = async () => {
      const response = await GetNEPVal();
      const price = response[0]?.price || '0';
      setNEPBUSDVal(parseFloat(price).toFixed(2));
    };
    load();
  }, []);

  useEffect(() => {
    if ((nepInput || '').length > 0 && nepBUSDVal) {
      setBUSDInput(nepInput * nepBUSDVal);
    }
  }, [nepBUSDVal, nepInput]);

  useEffect(() => {
    if ((busdInput || '').length > 0 && nepBUSDVal) {
      setNepInput(busdInput / nepBUSDVal);
    }
  }, [nepBUSDVal, busdInput]);

  const ctx: AppCtxType = {
    busdInput,
    setBUSDInput,
    nepInput,
    setNepInput,
    openConnectModal,
    openModal,
    setOpenConnectModal,
    nepBUSDVal,
  };

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
};

const Home: NextPage = () => {
  const value = useContext(AppContext);

  const generatedProps: HomePrivateProps = {};

  return (
    <HomeProvider>
      <HomeScreen {...generatedProps} />
    </HomeProvider>
  );
};

export default Home;
