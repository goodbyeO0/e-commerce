const arrayOfArrays = [[5114, 5114], [38524, 38524], [11061]];

const totalItemsInEachArray = arrayOfArrays.map(arr => arr.length);
const totalSubArrays = arrayOfArrays.length;
const totalAllItems = arrayOfArrays.flat().length;

console.log('Total items in each sub-array:', totalItemsInEachArray);
console.log('Total number of sub-arrays:', totalSubArrays);
console.log('Total number of all items in all sub-arrays:', totalAllItems);
