import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Date from './components/Date';
import BtnLeft from './components/BtnLeft';
import BtnRight from './components/BtnRight';
import Info from './components/Info';
import Search from './components/Search';
import Cards from './components/Cards';
import Create from './components/Create';

export default function App() {
  return (
    <Provider store={store}>
      <div className='container center'>
        <h2>Personal Finances</h2>
      </div>
      <div style={styles.container} className='container center'>
        <BtnLeft />
        <Date />
        <BtnRight />
      </div>
      <Info />
      <Search />
      <Create />
      <Cards />
    </Provider>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
