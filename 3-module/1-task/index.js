/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let result = data
        .filter( item => item.age <= age )
        .map( item => `${item.name}, ${item.balance}` )
        .join('\n');
    return result;
}


