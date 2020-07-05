/**
 * The function of adding a new element to the array at the specified index. Task 5
 * @type {number[]}
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addElem(i, newElem) {
    arr.splice(i, 0, newElem);
    return arr;
}

addElem(0, 0);