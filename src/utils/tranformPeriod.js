/**
 * @description Receive the period in'Jan/2019 format and transform it into the url format
 * @param {*} period Period in format mm/yyyy
 */
export default function transformPeriod(period) {
  const monthStr = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

  const periodArray = period.split('/'); // ['Jan', '2019']

  const year = periodArray[1];
  const month = (Number.parseInt(monthStr.indexOf(periodArray[0].toLowerCase())) + 1).toString();

  return year + '-' + month;
}
