import React, { Component } from 'react';
import { connect } from 'react-redux';

import dateAction from '../store/modules/Date/action';
import monthsYears from '../utils/monthYear';

class Date extends Component {
  //

  changeDate = e => {
    const value = e.target.value;
    this.props.dispatch(dateAction(value));
  };

  render() {
    return (
      <select value={this.props.month} onChange={this.changeDate} className='browser-default' style={styles}>
        {monthsYears.map(monthYear => {
          return (
            <option key={monthYear} value={monthYear}>
              {monthYear}
            </option>
          );
        })}
      </select>
    );
  }
}

const mapStateToProps = state => {
  return { month: state.dateReducer.month };
};

export default connect(mapStateToProps)(Date);

const styles = {
  display: 'inline-block',
  width: 100,
};
