import React, { useReducer, useState, useEffect, useContext } from 'react';
import AppContext from 'context/AppContext';
import HomeScreen from './Home.screen';
import { AppContext as AppCtxType } from 'types/AppContext.types';
import { HomePrivateProps } from './Home.props';
import { NextPage } from 'next';
import { GetNEPVal } from 'utils/GetAPI';
import { useWeb3React } from '@web3-react/core';
import { injected } from 'connectors/connector';
import { useWallet } from 'use-wallet';

const HomeProvider = ({ children }) => {
  const [busdInput, setBUSDInput] = useState('');
  const [nepInput, setNepInput] = useState('');
  const [openConnectModal, setOpenConnectModal] = useState(false);
  const [nepBUSDVal, setNEPBUSDVal] = useState<number>(0);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  const wallet = useWallet();
  const blockNumber = wallet?.getBlockNumber();

  const openModal = () => {
    setOpenConnectModal(!openConnectModal);
  };

  const openDetailsModalFunc = () => {
    setOpenDetailsModal(!openDetailsModal);
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

  const connect = async () => {
    try {
      // await activate(injected);
      if (wallet?.account) {
        setOpenDetailsModal(true);
      } else {
        await wallet.connect();
        setOpenDetailsModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const ctx: AppCtxType = {
    busdInput,
    setBUSDInput,
    nepInput,
    setNepInput,
    openConnectModal,
    openModal,
    setOpenConnectModal,
    nepBUSDVal,
    connect,
    active,
    account,
    openDetailsModal,
    setOpenDetailsModal,
    wallet,
    openDetailsModalFunc,
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
