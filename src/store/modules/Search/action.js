export default function search(filtered) {
  return {
    type: 'SEARCH_ACTION',
    filter: filtered,
  };
}
