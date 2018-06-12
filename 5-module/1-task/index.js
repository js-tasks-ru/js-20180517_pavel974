'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let headCells = table.tHead.rows[0].cells;
    let bodiesRows = table.tBodies[0].rows;
    let statusNumber = NaN;
    let genderNumber = NaN;
    let ageNumber = NaN;

    for (let i = 0; i < headCells.length; i++) {
        if (headCells[i].innerText === 'Status') {
            statusNumber = i;
        }
        if (headCells[i].innerText === 'Gender') {
            genderNumber = i;
        }
        if (headCells[i].innerText === 'Age') {
            ageNumber = i;
        }
    }

    for (let j = 0; j < bodiesRows.length; j++) {
        let bodiesRowsCells = bodiesRows[j].cells;
        let availableStatus = bodiesRowsCells[statusNumber].dataset.available;
        let gender = bodiesRowsCells[genderNumber].innerText;
        let age = bodiesRowsCells[ageNumber].innerText;

        if (availableStatus === 'true') {
            bodiesRows[j].classList.add('available');
        } else if (availableStatus === 'false') {
            bodiesRows[j].classList.add('unavailable');
        } else {
            bodiesRows[j].hidden = true
        }

        if (gender === 'm') {
            bodiesRows[j].classList.add('male');
        } else if (gender === 'f') {
            bodiesRows[j].classList.add('female');
        }

        if (age < 18) {
            bodiesRows[j].style.textDecoration = 'line-through';
        }
    }
}