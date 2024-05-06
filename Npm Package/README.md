# Array-helper-kit

This is a JavaScript library containing various array manipulation functions. These functions are useful for finding unique elements, filtering odd/even numbers and manipulating arrays efficiently.

## Installation

You can install this library via npm:

```bash
npm install array-helper-kit
```

## Usage

```javaScript
// Import the library
const arrayUtils = require('array-helper-kit');

// Example usage of functions
const numbers = [1, 2, 3, 4, 5];
console.log("Sum of array:", arrayUtils.sum(numbers)); // Output: Sum of array: 15
```

## Functions

### sum(arr)
Calculates the sum of all elements in the input array.

### filterEven(arr)
Filters out all even numbers from the input array.

### filterOdd(arr)
Filters out all odd numbers from the input array.

### reverse(arr)
Reverses the elements of the input array.

### unique(arr)
Returns a new array with only unique elements from the input array.

### max(arr)
Finds the maximum value in the input array.

### min(arr)
Finds the minimum value in the input array.

### clearDuplicates(arr)
Removes duplicate numbers from the input array.

### swap(arr)
Swaps two elements in an array.

### kthSmallestElem(arr, k)
Finds the kth smallest element in an array.


## License
This project is licensed under the MIT License - see the LICENSE file for details.