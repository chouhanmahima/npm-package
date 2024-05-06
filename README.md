# 🚀arr-frequency-counter

This library can be used with any JS based Frontend as well as Node.js backend to get some utility function that counts the frequency of elements in an array.

## 💻Installation

To install array-frequency-counter, use npm:

```bash
npm install arr-frequency-counter 
```

## Library Usage

```bash
const { countFrequency } = require("arr-frequency-counter");

const data = [1,1,2,5,7,2,6,8,9,7,2,10,10]

console.log(countFrequency(data));
// Output: { '1': 2, '2': 3, '5': 1, '6': 1, '7': 2, '8': 1, '9': 1, '10': 2 }
```

## Parameters
* arr: The array containing elements to be counted.

## Return Value
An object where keys represent unique elements from the input array and values represent the frequency of each element.

## ✨Example
```bash
console.log(countFrequency([true, true, false, true, false, false]));

// Output: { 'true': 3, 'false': 3 }
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.