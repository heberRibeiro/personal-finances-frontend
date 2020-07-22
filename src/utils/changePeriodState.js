import monthsYears from './monthYear';
import dataAction from '../store/modules/Date/action';

/**
 * @description Changes the period value
 * @param {*} monthYear Month and year in the following format: 'Jan / 2019'
 * @param {*} button Boolean that determines whether the function call was made by the left button or not
 */
export default function changePeriodState(monthYear, button) {
  const indexMonthYearCurrent = monthsYears.findIndex((value, index) => {
    return value === monthYear;
  });

  if (indexMonthYearCurrent < monthsYears.length && button === false) {
    const nextPeriod = monthsYears[indexMonthYearCurrent + 1];
    this.props.dispatch(dataAction(nextPeriod));
    return;
  }

  const previousPeriod = monthsYears[indexMonthYearCurrent - 1];
  this.props.dispatch(dataAction(previousPeriod));
}
