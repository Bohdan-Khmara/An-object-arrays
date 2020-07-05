/**
 * The function of removing an element from an array at the specified index. Task 6
 * @type {number[]}
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function deleteElem(i, deleteElem) {
    arr.splice(i, deleteElem);
    return arr;
}

deleteElem(0, 1);
