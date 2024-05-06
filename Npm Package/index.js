// array-hofs/index.js

// Function to calculate the sum of all elements in an array
/***************************************************************************
 * Calculates the sum of all elements in the input array.
 * @param {Array<number>} arr - The input array.
 * @returns {number} The sum of all elements in the array.
 ***************************************************************************/
function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
//  const inputArray = [1, 2, 3, 4, 5];
//  const result = sum(inputArray);
//  console.log("Sum of array:", result); // Output: Sum of array: 15


// Function to filter out all even numbers from an array
/****************************************************************************
 * Filters out all even numbers from the input array.
 * @param {number[]} arr - The input array.
 * @returns {number[]} An array with only even numbers.
 ****************************************************************************/
function filterEven(arr) {
    return arr.filter(num => num % 2 === 0);
}
// Example usage:
// const inputArray = [1, 2, 3, 4, 5, 6];
// const filteredArray = filterEven(inputArray);
// console.log("Filtered even numbers:", filteredArray); // Output: Filtered even numbers: [2, 4, 6]


// Function to filter out all odd numbers from an array
/*************************************************************************
 * Filters out all odd numbers from the input array.
 * @param {number[]} arr - The input array.
 * @returns {number[]} An array with only odd numbers.
 *************************************************************************/
function filterOdd(arr) {
    return arr.filter(num => num % 2 !== 0);
}
// Example usage:
// const inputArray = [1, 2, 3, 4, 5, 6];
// const filteredArray = filterOdd(inputArray);
// console.log("Filtered odd numbers:", filteredArray); // Output: Filtered odd numbers: [1, 3, 5]


// Function to reverse the elements of an array
/***************************************************************************
 * Reverses the elements of the input array.
 * @param {any[]} arr - The input array.
 * @returns {any[]} The input array with elements reversed.
 ***************************************************************************/
function reverse(arr) {
    return arr.reverse();
}
// Example usage:
// const inputArray = ['a', 'b', 'c', 'd', 'e'];
// const reversedArray = reverse(inputArray);
// console.log("Reversed array:", reversedArray); // Output: Reversed array: ['e', 'd', 'c', 'b', 'a']


// Function to get an array with only unique elements (remove duplicates)
/****************************************************************************
 * Returns a new array with only unique elements from the input array.
 * @param {any[]} arr - The input array.
 * @returns {any[]} A new array with only unique elements.
 *****************************************************************************/
function unique(arr) {
    return [...new Set(arr)];
}
// Example usage for unique function:
// const inputArray = [1, 2, 3, 4, 3, 2, 1];
// const uniqueArray = unique(inputArray);
// console.log("Unique array:", uniqueArray); // Output: Unique array: [1, 2, 3, 4]


// Function to find the maximum value in an array
/*******************************************************************************
 * Finds the maximum value in the input array.
 * @param {number[]} arr - The input array.
 * @returns {number} The maximum value in the array.
 ********************************************************************************/
function max(arr) {
    return Math.max(...arr);
}
// Example usage for max function:
// const maxArray = [5, 8, 2, 10, 3];
// const maxValue = max(maxArray);
// console.log("Maximum value:", maxValue); // Output: Maximum value: 10


// Function to find the minimum value in an array
/*********************************************************************************
 * Finds the minimum value in the input array.
 * @param {number[]} arr - The input array.
 * @returns {number} The minimum value in the array.
 *********************************************************************************/
function min(arr) {
    return Math.min(...arr);
}
// Example usage for min function:
// const minArray = [5, 8, 2, 10, 3];
// const minValue = min(minArray);
// console.log("Minimum value:", minValue); // Output: Minimum value: 2


/**************************************************************************
 * Removes duplicate numbers from the input array.
 * @param {Array<any>} arr - The input array.
 * @returns {Array<any>} An array with duplicate numbers removed.
 **************************************************************************/
function clearDuplicates(arr) {
    return [...new Set(arr)];
}

/*****************************************************************************
 * Swaps two elements in an array.
 * @param {Array} arr - The array in which elements will be swapped.
 * @param {number} index1 - The index of the first element to be swapped.
 * @param {number} index2 - The index of the second element to be swapped.
******************************************************************************/

const swap = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

/*****************************************************************************
 * Finds the kth smallest element in an array.
 * @param {Array} arr - The array in which to find the kth smallest element.
 * @param {number} k - The index of the smallest element to find (1-based index).
 * @returns {*} - The kth smallest element.
******************************************************************************/

const kthSmallestElem = (arr, k) => {
    const sortedArr = bubbleSort(arr);
    return (sortedArr[k - 1]);
}



// Export the functions to make them accessible outside this module
module.exports = {
    sum,
    filterEven,
    filterOdd,
    reverse,
    unique,
    max,
    min,
    clearDuplicates,
    swap,
    kthSmallestElem
};

