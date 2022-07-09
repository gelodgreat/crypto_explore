import { Dispatch, SetStateAction } from 'react';

export interface ModalProps {
  open: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  leftBtnText?: string;
  leftBtnAction?: () => void;
  rightBtnText?: string;
  rightBtnAction?: () => void;
}
