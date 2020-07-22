export default function btnLeft(state = '', action) {
  switch (action.type) {
    case 'CHANGE_BUTTON_LEFT':
      return {
        disabledBtnLeft: action.disabledBtnLeft,
      };

    default:
      break;
  }

  return state;
}
