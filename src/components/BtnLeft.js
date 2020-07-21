import React, { Component } from 'react';
import { connect } from 'react-redux';

import monthsYears from '../utils/monthYear';
import dateAction from '../store/modules/Date/action';

class BtnLeft extends Component {
  //

  handleBtnLeft = e => {
    const monthYearCurrent = this.props.period;

    const indexMonthYearCurrent = monthsYears.findIndex((value, index) => {
      return value === monthYearCurrent;
    });

    const indexMonthYearPrevious = indexMonthYearCurrent - 1;
    const monthYearPrevius = monthsYears[indexMonthYearPrevious];

    if (indexMonthYearCurrent === 1) {
      this.props.dispatch(dateAction(monthYearPrevius, true, false));
      return;
    }

    this.props.dispatch(dateAction(monthYearPrevius, false, false));
  };

  render() {
    return (
      <div style={styles}>
        <button disabled={this.props.disabled} className='waves-effect waves-light btn' onClick={this.handleBtnLeft}>
          &lt;
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    period: state.dateReducer.period,
    disabled: state.dateReducer.disabledBtnLeft,
  };
}

export default connect(mapStateToProps)(BtnLeft);

const styles = {
  display: 'inline-block',
  width: 50,
  height: 35,
};
