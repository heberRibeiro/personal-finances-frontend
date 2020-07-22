import btnLeftAction from '../store/modules/BtnLeft/action';
import btnRightAction from '../store/modules/BtnRight/action';
import monthsYears from '../utils/monthYear';

/**
 * @description Enables or disables the buttons receiving the current state period
 * @param {*} monthYear Month and year in the following format: 'Jan / 2019'
 */
export default function (monthYear) {
  const indexMonthYearCurrent = monthsYears.findIndex((value, index) => {
    return value === monthYear;
  });

  // Disables the left button if the selected date is the first
  if (indexMonthYearCurrent === 0) {
    this.props.dispatch(btnLeftAction(true));
    this.props.dispatch(btnRightAction(false));
    return;
  }

  // Disables the right button if the selected date is the first
  if (indexMonthYearCurrent === monthsYears.length - 1) {
    this.props.dispatch(btnRightAction(true));
    this.props.dispatch(btnLeftAction(false));
    return;
  }

  this.props.dispatch(btnLeftAction(false));
  this.props.dispatch(btnRightAction(false));
}
