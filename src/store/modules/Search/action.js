export default function search(filtered, releases, incomes, expenses, balance) {
  return {
    type: 'SEARCH_ACTION',
    filter: filtered,
    releases,
    incomes,
    expenses,
    balance,
  };
}
