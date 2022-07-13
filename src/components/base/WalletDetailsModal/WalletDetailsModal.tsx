import { Fragment, useContext, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationIcon } from '@heroicons/react/outline';
import { WalletDetailsModalProps } from './WalletDetailsModal.props';
import React from 'react';
import AppContext from 'context/AppContext';
import Web3 from 'web3';

const WalletDetailsModal = (props: WalletDetailsModalProps) => {
  const { open, openModal, leftBtnAction, leftBtnText, rightBtnAction, rightBtnText, title, description } = props;
  const cancelButtonRef = useRef(null);
  const value = useContext(AppContext);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' initialFocus={cancelButtonRef} onClose={openModal}>
        <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full'>
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                      <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-gray-900'>
                        {title}
                      </Dialog.Title>
                      {(description || '').length > 0 && (
                        <div className='mt-2'>
                          <p className='text-sm text-gray-500'>{description}</p>
                        </div>
                      )}
                      {value?.wallet?.account && (
                        <div>
                          <p>Address: {value?.wallet?.account}</p>
                          <p>Balance: {Web3.utils.fromWei(value.wallet.balance, 'ether')}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                  {rightBtnAction && (rightBtnText || '').length > 0 && (
                    <button
                      type='button'
                      className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
                      onClick={rightBtnAction}
                    >
                      {rightBtnText}
                    </button>
                  )}
                  {leftBtnAction && (leftBtnText || '').length > 0 && (
                    <button
                      type='button'
                      className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                      onClick={leftBtnAction}
                      ref={cancelButtonRef}
                    >
                      {leftBtnText}
                    </button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default React.memo(WalletDetailsModal);
