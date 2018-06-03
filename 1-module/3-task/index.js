'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
 function getMinMax(str) {
     let arr = [];
     let number = '';

     for (let i = 0; i < str.length; i++) {

         if (str[i] === '-' || str[i] === '.' || (!isNaN(str[i]) && str[i] !== ' ')) {
             number += str[i]
         } else if (number !== '') {
             arr.push(+number);
             number = '';
         }

     }
     if (number !== '') {
         arr.push(+number);
         number = '';
     }
     if (arr.leight !== 0) {
         let numberMax = arr[0];
         let numberMin = arr[0];

         arr.forEach(function(item) {
             if (item > numberMax) {
                 numberMax = item
             }
             if (item < numberMin) {
                 numberMin = item
             }
         });
         return {min: numberMin, max: numberMax}
     }
 }
