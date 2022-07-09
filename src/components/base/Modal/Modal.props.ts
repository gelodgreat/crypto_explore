import { Dispatch, SetStateAction } from 'react';

export interface ModalProps {
  open: boolean;
  openModal: () => void;
  leftBtnText?: string;
  leftBtnAction?: () => void;
  rightBtnText?: string;
  rightBtnAction?: () => void;
}
