/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
 function pow (m, n) {
     let result = m;

     for (let i = 1; i < n; i++) {
         result = result * m;
     }
     return result;
 }
