/**
 * The function takes 2 arrays and returns a new array in which all elements from two arrays are collected without repetition. Task 7
 * @type {(string|number)[]}
 */
let array1 = ['a', 2, 'b', 4, 5, 6, 'c', 8, 'D', 10];
let array2 = [10, 2, 5, 1, 7, 9, 3, 4, 6, 8];
let finalArr = array1.concat(array2);

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

let unique = finalArr.filter(onlyUnique);
alert(unique);