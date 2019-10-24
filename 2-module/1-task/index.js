/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  if (obj == null || typeof obj !== 'object') {
    return obj;
  }
  const copy = {};
  for (const prop in obj) {
    if (typeof obj[prop] === 'object') {
      copy[prop] = clone(obj[prop]);
    } else {
      copy[prop] = obj[prop];
    }
  }
  return copy;
}
