import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Date from './components/Date';
import BtnLeft from './components/BtnLeft';

export default function App() {
  return (
    <Provider store={store}>
      <div className='container center'>
        <h3>Personal Finances</h3>
        <div className='row'>
          <BtnLeft />
          <Date />
        </div>
      </div>
    </Provider>
  );
}
