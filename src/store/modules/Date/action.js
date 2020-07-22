export default function period(monthYear) {
  return {
    type: 'CHANGE_DATE',
    period: `${monthYear}`,
  };
}
