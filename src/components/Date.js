import React, { Component } from 'react';
import { connect } from 'react-redux';

import monthsYears from '../utils/monthYear';

class Date extends Component {
  //

  changeDate = e => {
    const value = e.target.value;
    this.props.dispatch({ type: 'CHANGE_DATE', month: value });
  };

  render() {
    return (
      <select value={this.props.month} onChange={this.changeDate} className='browser-default' style={styles}>
        {monthsYears.map(monthYear => {
          return <option value={monthYear}>{monthYear}</option>;
        })}
      </select>
    );
  }
}

const styles = {
  display: 'inline-block',
  width: 100,
};

const mapStateToProps = state => {
  return { month: state.dateReducer.month };
};

export default connect(mapStateToProps)(Date);
