export default function btnChange(disabledBtnLeft) {
  return {
    type: 'CHANGE_BUTTON_LEFT',
    disabledBtnLeft: disabledBtnLeft,
  };
}
