import React, { useContext, useState } from 'react';
import ConverterScreen from 'components/module';
import Modal from 'components/base/Modal/Modal';
import AppContext from 'context/AppContext';
import { HomeProps } from './Home.props';
import WalletDetailsModal from 'components/base/WalletDetailsModal/WalletDetailsModal';

const HomeScreen = (props: HomeProps) => {
  const value = useContext(AppContext);
  return (
    <div>
      <b>{value?.account}</b>
      <Modal
        title='Wallet Details'
        description='Wallet not connected, Please click the "Connect"'
        open={value?.openConnectModal}
        openModal={value?.openModal}
        leftBtnAction={() => {
          value?.connect();
          value?.setOpenConnectModal(false);
        }}
        leftBtnText='Connect'
        rightBtnAction={() => {
          value?.setOpenConnectModal(false);
        }}
        rightBtnText='Cancel'
      />
      <WalletDetailsModal
        title='Wallet Details'
        description='Check your Wallet Details'
        open={value?.openDetailsModal}
        openModal={value?.openDetailsModalFunc}
        leftBtnAction={() => {
          value?.setOpenDetailsModal(false);
        }}
        leftBtnText='Done'
      />
      <ConverterScreen />
    </div>
  );
};

export default HomeScreen;
