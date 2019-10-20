/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  const a = m;
  // eslint-disable-next-line no-plusplus
  for (i = 1; i < n; i++) {
    m *= a;
  }
  return m;
}
