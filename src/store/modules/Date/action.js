export default function date(monthYear) {
  return {
    type: 'CHANGE_DATE',
    period: `${monthYear}`,
  };
}
