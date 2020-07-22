const http = require('./http-common').default;

const getAll = () => {
  return http.get('/api/transaction');
};

const get = async period => {
  try {
    const res = await http.get(`api/transaction/period?period=${period}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll,
  get,
};
