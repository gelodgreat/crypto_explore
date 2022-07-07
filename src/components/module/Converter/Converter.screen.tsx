import React, { useContext } from 'react';
import AppContext from 'context/AppContext';
import type { NextPage } from 'next';

const Converter: NextPage = (props: any) => {
  const value = useContext(AppContext);
  return (
    <div className='mt-10 sm:mt-0'>
      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <div className='mt-5 md:mt-0 md:col-span-2'>
          <form action='#' method='POST'>
            <div className='shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 bg-white sm:p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='nep-input' className='block text-sm font-medium text-gray-700'>
                      NEP
                    </label>
                    <input
                      type='text'
                      name='nep-input'
                      id='nep-input'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      value={value?.input}
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
              <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Convert
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Converter);
