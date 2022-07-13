import { Dispatch, SetStateAction } from 'react';
import { Wallet } from 'use-wallet/dist/cjs/types';

export interface AppContext {
  busdInput: string;
  setBUSDInput: Dispatch<SetStateAction<string>>;
  nepInput: string;
  setNepInput: Dispatch<SetStateAction<string>>;
  openConnectModal: boolean;
  openModal: () => void;
  setOpenConnectModal: Dispatch<SetStateAction<boolean>>;
  nepBUSDVal: number;
  connect: () => void;
  active: boolean;
  account: any;
  openDetailsModal: boolean;
  setOpenDetailsModal: Dispatch<SetStateAction<boolean>>;
  wallet?: Wallet;
  openDetailsModalFunc: () => void;
}
