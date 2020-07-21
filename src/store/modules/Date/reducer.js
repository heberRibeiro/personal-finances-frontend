export default function Date(state = { period: 'Jan/2019', disabledBtnLeft: '', disabledBtnRight: '' }, action) {
  switch (action.type) {
    case 'CHANGE_DATE':
      return {
        period: action.period,
        disabledBtnLeft: action.disabledBtnLeft,
        disabledBtnRight: action.disabledBtnRight,
      };

    default:
      break;
  }
  return state;
}
