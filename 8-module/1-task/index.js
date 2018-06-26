'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavods'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');
    this.el.innerHTML = renderTable(items);

    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {
        items.sort(
            function (a, b) {
                let arrA = [];
                let arrB = [];
                for (let key in a) {
                    arrA.push(a[key])
                }
                for (let key in b) {
                    arrB.push(b[key])
                }
                if (arrA[column] > arrB[column]) return 1;
                if (arrA[column] < arrB[column]) return -1;
            }
        );
        if (desc) items.reverse();
        this.el.innerHTML = renderTable(items);
    };

    function renderTable(items) {
        let innerTable = '<thead><tr>';

        for (let key in items[0]) {
            innerTable += `<td>${key}</td>`
        }

        innerTable += '</tr></thead><tbody>';

        for (let i = 0; i < items.length; i++) {
            innerTable += '<tr>';

            for (let key in items[i]) {
                innerTable += `<td>${items[i][key]}</td>`
            }

            innerTable += '</tr>';

        }
        innerTable += '</tbody>';

        return innerTable;
    }
}

