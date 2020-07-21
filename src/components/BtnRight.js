import React, { Component } from 'react';
import { connect } from 'react-redux';

import monthsYears from '../utils/monthYear';
import dateAction from '../store/modules/Date/action';

class BtnRight extends Component {
  //

  handleBtnRight = e => {
    //

    const monthYearCurrent = this.props.period;
    const indexMonthYearCurrent = monthsYears.findIndex((value, index) => {
      return value === monthYearCurrent;
    });

    const indexMonthYearNext = indexMonthYearCurrent + 1;
    const monthYearNext = monthsYears[indexMonthYearNext];

    if (indexMonthYearCurrent === monthsYears.length - 2) {
      this.props.dispatch(dateAction(monthYearNext, false, true));
      return;
    }

    this.props.dispatch(dateAction(monthYearNext, false, false));
  };
  render() {
    return (
      <div style={styles}>
        <button disabled={this.props.disabled} className='waves-effect waves-light btn' onClick={this.handleBtnRight}>
          &gt;
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    period: state.dateReducer.period,
    disabled: state.dateReducer.disabledBtnRight,
  };
}

export default connect(mapStateToProps)(BtnRight);

const styles = {
  display: 'inline-block',
  width: 50,
  height: 35,
};
