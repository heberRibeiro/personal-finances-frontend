export default function Date(state = { month: 'Jan/2019', disabledBtnLeft: '', disabledBtnRight: '' }, action) {
  switch (action.type) {
    case 'CHANGE_DATE':
      return {
        month: action.month,
        disabledBtnLeft: action.disabledBtnLeft,
        disabledBtnRight: action.disabledBtnRight,
      };

    default:
      break;
  }
  return state;
}
