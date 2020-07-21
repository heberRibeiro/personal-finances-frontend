export default function date(monthYear, disabledBtnLeft, disabledBtnRight) {
  return {
    type: 'CHANGE_DATE',
    period: `${monthYear}`,
    disabledBtnLeft: disabledBtnLeft,
    disabledBtnRight: disabledBtnRight,
  };
}
