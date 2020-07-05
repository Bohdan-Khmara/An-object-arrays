/**
 * returns a new array, which contains all the elements from the 1 array that are not in the 2 array. Task 9
 * @type {(string|number)[]}
 */
let array1 = ['a', 2, 'b', 4, 5, 6, 'c', 8, 'D', 10];
let array2 = [10, 2, 5, 1, 7, 9, 3, 4, 6, 8];
let finalArr = [];

function comparison(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            finalArr.push(array1[i]);
        }
    }
    return finalArr;
}

comparison(array1, array2);