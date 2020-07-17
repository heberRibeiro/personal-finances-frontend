import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Date from './components/Date';
import BtnLeft from './components/BtnLeft';
import BtnRight from './components/BtnRight';

export default function App() {
  return (
    <Provider store={store}>
      <div className='container center'>
        <h2>Personal Finances</h2>
      </div>
      <div className='container center'>
        <BtnLeft />
        <Date />
        <BtnRight />
      </div>
    </Provider>
  );
}
