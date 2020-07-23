export default function info(state = '', action) {
  switch (action.type) {
    case 'INFO_ACTION':
      return {
        data: action.data,
        releases: action.releases,
        incomes: action.incomes,
        expenses: action.expenses,
        balance: action.balance,
        transaction: action.transaction,
      };

    default:
      break;
  }
  return state;
}
