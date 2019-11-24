/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const result = str
    .split(' ')
    .join(',')
    .split(',')
    .map(item => parseFloat(item))
    .filter(item => !isNaN(item))
    .sort((a, b) => a - b);

  return { min: result[0], max: result[result.length - 1] };
}
