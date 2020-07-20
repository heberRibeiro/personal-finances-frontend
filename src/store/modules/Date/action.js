export default function date(monthYear, disabledBtnLeft, disabledBtnRight) {
  return {
    type: 'CHANGE_DATE',
    month: `${monthYear}`,
    disabledBtnLeft: disabledBtnLeft,
    disabledBtnRight: disabledBtnRight,
  };
}
