import { Dispatch, SetStateAction } from 'react';

export interface WalletDetailsModalProps {
  open: boolean;
  title: string;
  openModal: () => void;
  leftBtnText?: string;
  leftBtnAction?: () => void;
  rightBtnText?: string;
  rightBtnAction?: () => void;
  description?: string;
}
