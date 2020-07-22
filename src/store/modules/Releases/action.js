export default function releases(releases) {
  return {
    type: 'RELEASE_ACTION',
    releases: releases,
  };
}
