export default function Date(state = { period: 'Jan/2019' }, action) {
  switch (action.type) {
    case 'CHANGE_DATE':
      return {
        period: action.period,
      };

    default:
      break;
  }
  return state;
}
