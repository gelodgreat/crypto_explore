import { Dispatch, SetStateAction } from 'react';

export interface AppContext {
  busdInput: string;
  setBUSDInput: Dispatch<SetStateAction<string>>;
  nepInput: string;
  setNepInput: Dispatch<SetStateAction<string>>;
  openConnectModal: boolean;
  openModal: () => void;
  setOpenConnectModal: Dispatch<SetStateAction<boolean>>;
}
