/**
 * The function takes an array and returns the sum of all elements of the array. Task 3
 * @type {number[]}
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

sum(arr);