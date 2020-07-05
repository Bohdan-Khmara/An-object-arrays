/**
 * returns a new array in which all elements from two arrays are collected without repetition. Task 8
 * @type {(string|number)[]}
 */
let array1 = ['a', 2, 'b', 4, 5, 6, 'c', 8, 'D', 10];
let array2 = [10, 2, 5, 1, 7, 9, 3, 4, 6, 8];
let finalArr = [];

function comparison(array1, array2) {
    finalArr = array1.concat(array2);
    finalArr = finalArr.filter(function (item, index, arr) {
        return arr.indexOf(item) === index;
    });
    return finalArr;
}

comparison(array1, array2);