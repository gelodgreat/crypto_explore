import React, { useContext, useState } from 'react';
import ConverterScreen from 'components/module';
import Modal from 'components/base/Modal/Modal';
import AppContext from 'context/AppContext';
import { HomeProps } from './Home.props';

const HomeScreen = (props: HomeProps) => {
  const value = useContext(AppContext);
  console.log({ value });
  return (
    <div>
      <Modal open={value?.openConnectModal} setModalOpen={value?.setOpenConnectModal} />
      <ConverterScreen />
    </div>
  );
};

export default HomeScreen;
