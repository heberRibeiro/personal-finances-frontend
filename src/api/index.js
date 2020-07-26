import http from './http-common';

export const getAll = () => {
  return http.get('/api/transaction');
};

export const get = async period => {
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

export const update = async (id, data) => {
  await http.put(`api/transaction/${id}`, data);
};

export const remove = async id => {
  await http.delete(`api/transaction/${id}`);
};

export const create = async data => {
  await http.post('api/transaction/', data);
};

export default {
  getAll,
  get,
  update,
  remove,
  create,
};
