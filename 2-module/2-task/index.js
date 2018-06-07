/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
    let result = [];
    for ( let key in obj ) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            let keyResult = find(obj[key], value);
            if (keyResult !== null) {
                result.push(key + '.' + keyResult);
            }
        } else if (obj[key] === value) {
            result.push(key);
        }
    }
    if (result.length === 1) {
        return result.join();
    }
    if (result.length === 0) {
        return null;
    }
    return result;
}
