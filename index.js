/**
 * The function takes an array and returns its maximum element. Task 4
 * @type {number[]}
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function maxValue(arr) {
    return Math.max(...arr);
}

maxValue(arr);