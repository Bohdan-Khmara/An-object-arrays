/**
 * The function takes an array and outputs only even elements. Task 2
 * @type {number[]}
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers(arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (i % 2 === 0) {
            alert(i);
        }
    }
}

evenNumbers(arr);