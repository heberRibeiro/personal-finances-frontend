export default function info(data, releases, incomes, expenses, balance) {
  return {
    type: 'INFO_ACTION',
    data: data,
    releases: releases,
    incomes: incomes,
    expenses: expenses,
    balance: balance,
  };
}
