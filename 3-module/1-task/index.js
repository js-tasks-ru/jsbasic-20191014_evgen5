/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  const people = data.filter(hum => hum.age <= age);
  let result = '';

  for (const key of people) {
    result += `${key.name}, ${key.balance}\n`;
  }

  return result.slice(0, -1);
}
