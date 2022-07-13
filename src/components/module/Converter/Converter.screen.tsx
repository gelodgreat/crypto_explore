import React, { useContext } from 'react';
import AppContext from 'context/AppContext';
import type { NextPage } from 'next';
import { Container } from './Converter.style';
import { ConverterProps } from './Converter.props';

const Converter: NextPage = (props: ConverterProps) => {
  const value = useContext(AppContext);

  return (
    <Container>
      <div className='shadow overflow-hidden rounded-md'>
        <div className='px-4 py-5 bg-white sm:p-6'>
          <div className='grid  gap-6'>
            <div className='text-2xl'>Crypto Converter</div>

            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='nep-input' className='block text-sm font-medium text-gray-700'>
                NEP
              </label>
              <input
                type='text'
                name='nep-input'
                id='nep-input'
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                value={value?.nepInput}
                onChange={(e) => {
                  value?.setNepInput(e.target.value);
                }}
              />
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='busd' className='block text-sm font-medium text-gray-700'>
                BUSD
              </label>
              <input
                type='text'
                name='busd'
                id='busd'
                autoComplete='family-name'
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                value={value?.busdInput}
                onChange={(e) => {
                  value?.setBUSDInput(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className='px-4 py-3 bg-gray-50 items-center'>
          <button
            onClick={() => {
              value?.wallet?.account ? value.openDetailsModalFunc() : value?.openModal();
            }}
            className='py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Check Wallet Details
          </button>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Converter);
