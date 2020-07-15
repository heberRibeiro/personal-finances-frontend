import React, { Component } from 'react';

class Date extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col s4 offset-s4'>
          <label>Browser Select</label>
          <select className='browser-default'>
            <option value='jan/2019' selected>
              Jan/2019
            </option>
            <option value='fev/2019'>Fev/2019</option>
            <option value='mar/2019'>Mar/2019</option>
            <option value='abr/2019'>Abr/2019</option>
            <option value='mai/2019'>Mai/2019</option>
            <option value='jun/2019'>Jun/2019</option>
            <option value='jul/2019'>Jul/2019</option>
            <option value='ago/2019'>Ago/2019</option>
            <option value='set/2019'>Set/2019</option>
            <option value='out/2019'>Out/2019</option>
            <option value='nov/2019'>Dez/2019</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Date;
