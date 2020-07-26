import http from './http-common';

export const getAll = () => {
  return http.get('/api/transaction');
};

export const get = async period => {
  try {
    let res = await http.get(`api/transaction/period?period=${period}`);

    res = JSON.stringify(res);
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

export const update = async (id, data) => {
  await http.put(`api/transaction/${id}`, JSON.parse(data));
};

export const remove = async id => {
  await http.delete(`api/transaction/${id}`);
};

export const create = async data => {
  await http.post('api/transaction/', JSON.parse(data));
};

export default {
  getAll,
  get,
  update,
  remove,
  create,
};
