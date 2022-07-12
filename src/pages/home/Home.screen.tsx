import React, { useContext, useState } from 'react';
import ConverterScreen from 'components/module';
import Modal from 'components/base/Modal/Modal';
import AppContext from 'context/AppContext';
import { HomeProps } from './Home.props';

const HomeScreen = (props: HomeProps) => {
  const value = useContext(AppContext);
  return (
    <div>
      <Modal
        title='Wallet Details'
        description='Wallet not connected, Please click the "Connect"'
        open={value?.openConnectModal}
        openModal={value?.openModal}
        leftBtnAction={() => {}}
        leftBtnText='Connect'
        rightBtnAction={() => {}}
        rightBtnText='Cancel'
      />
      <ConverterScreen />
    </div>
  );
};

export default HomeScreen;
