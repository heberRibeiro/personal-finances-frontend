export default function Date(state = { month: 'Jan/2019' }, action) {
  switch (action.type) {
    case 'CHANGE_DATE':
      return { month: action.month };

    default:
      break;
  }
  return state;
}
