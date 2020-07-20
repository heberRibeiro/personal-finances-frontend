const http = require('./http-common');

const getAll = () => {
  return http.get('/api/transaction');
};

const get = (year, month) => {
  return http.get(`api/transaction/period?period=${year}-${month}`);
};

module.exports = {
  getAll,
  get,
};
