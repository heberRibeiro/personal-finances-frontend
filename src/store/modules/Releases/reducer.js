export default function releases(state = '', action) {
  switch (action.type) {
    case 'RELEASE_ACTION':
      return {
        releases: action.releases,
      };

    default:
      break;
  }
  return state;
}
