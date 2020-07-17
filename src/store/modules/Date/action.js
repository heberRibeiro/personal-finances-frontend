export default function date(value) {
  return {
    type: 'CHANGE_DATE',
    month: `${value}`,
  };
}
