import React from 'react';

import Date from './components/Date';
import BtnLeft from './components/BtnLeft';

export default function App() {
  return (
    <div className='container center'>
      <h3>Personal Finances</h3>
      <div className='row'>
        <BtnLeft />
        <Date />
      </div>
    </div>
  );
}
