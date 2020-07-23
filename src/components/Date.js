import React, { Component } from 'react';
import { connect } from 'react-redux';

import periodAction from '../store/modules/Date/action';
import monthsYears from '../utils/monthYear';
import enableDisableButtons from '../utils/enableDisableButtons';
import tranformPeriod from '../utils/tranformPeriod';
import infoAction from '../store/modules/Info/action';

import api from '../api';

class Date extends Component {
  //

  componentDidUpdate() {
    const monthYearCurrent = this.props.period;
    enableDisableButtons.call(this, monthYearCurrent);

    (async () => {
      const res = await api.get(tranformPeriod(monthYearCurrent));

      const { data, releases, incomes, expenses, balance, transaction } = res;

      await this.props.dispatch(infoAction(data, releases, incomes, expenses, balance, transaction));
    })();
  }

  changeDate = e => {
    const monthYearSelected = e.target.value;
    enableDisableButtons.call(this, monthYearSelected);
    this.props.dispatch(periodAction(monthYearSelected));
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
    period: state.periodReducer.period,
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
