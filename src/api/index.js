const http = require('./http-common').default;

const getAll = () => {
  return http.get('/api/transaction');
};

const get = async period => {
  try {
    const res = await http.get(`api/transaction/period?period=${period}`);

    const data = await res.data;
    const releases = await data.lenght;
    const incomes = await data.income;
    const expenses = await data.expenses;
    const balance = await data.balance;
    const transaction = await data.transaction;

    return {
      data,
      releases,
      incomes,
      expenses,
      balance,
      transaction,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll,
  get,
};