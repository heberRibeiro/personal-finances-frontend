import React, { Component } from 'react';
import { connect } from 'react-redux';

import dateAction from '../store/modules/Date/action';
import monthsYears from '../utils/monthYear';
import enableDisableButtons from '../utils/enableDisableButtons';

class Date extends Component {
  //

  componentDidUpdate() {
    const monthYearCurrent = this.props.period;
    enableDisableButtons.call(this, monthYearCurrent);
    // this.props.dispatch(dateAction(monthYearCurrent));
  }

  changeDate = e => {
    const monthYearSelected = e.target.value;
    enableDisableButtons.call(this, monthYearSelected);
    this.props.dispatch(dateAction(monthYearSelected));
  };

  render() {
    return (
      <select value={this.props.period} onChange={this.changeDate} className='browser-default' style={styles}>
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
  return {
    period: state.dateReducer.period,
  };
};

export default connect(mapStateToProps)(Date);

const styles = {
  padding: 0,
  justifyContent: 'center',
  alighItems: 'center',
  display: 'flex',
  width: 100,
  height: 35,
};
