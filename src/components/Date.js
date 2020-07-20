import React, { Component } from 'react';
import { connect } from 'react-redux';

import dateAction from '../store/modules/Date/action';
import monthsYears from '../utils/monthYear';

class Date extends Component {
  //

  componentDidMount() {
    //
    const monthYearCurrent = this.props.month;

    const indexMonthYearCurrent = monthsYears.findIndex((value, index) => {
      return value === monthYearCurrent;
    });

    if (indexMonthYearCurrent === 0) {
      this.props.dispatch(dateAction(monthYearCurrent, true, false));
      return;
    }

    if (indexMonthYearCurrent === monthsYears.length) {
      this.props.dispatch(dateAction(monthYearCurrent, false, true));
      return;
    }
  }

  changeDate = e => {
    const monthYearSelected = e.target.value;

    const indexMonthYearSelected = monthsYears.findIndex((value, index) => {
      return value === monthYearSelected;
    });

    if (indexMonthYearSelected === 0) {
      this.props.dispatch(dateAction(`${monthYearSelected}`, true, false));
      return;
    }
    if (indexMonthYearSelected === monthsYears.length) {
      this.props.dispatch(dateAction(monthYearSelected, false, true));
      return;
    }

    this.props.dispatch(dateAction(monthYearSelected, false, false));
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
  return {
    month: state.dateReducer.month,
    disabledBtnLeft: state.dateReducer.disabledBtnLeft,
    disabledBtnRight: state.dateReducer.disabledBtnRight,
  };
};

export default connect(mapStateToProps)(Date);

const styles = {
  display: 'inline-block',
  width: 100,
};
