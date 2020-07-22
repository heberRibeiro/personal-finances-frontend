export default function btnRight(state = '', action) {
  switch (action.type) {
    case 'CHANGE_BUTTON_RIGHT':
      return {
        disabledBtnRight: action.disabledBtnRight,
      };

    default:
      break;
  }

  return state;
}
