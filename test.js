const inputString = "5114a5114a15417a52991a52991a52991a5114a5114a41467a9253a9253a52991";

const mergedArray = inputString.split('a').reduce((acc, value) => {
    const lastSubArray = acc[acc.length - 1];
    if (lastSubArray && lastSubArray[0] === value) {
        lastSubArray.push(value);
    } else {
        acc.push([value]);
    }
    return acc;
}, []).reduce((acc, arr) => {
    const existing = acc.find(subArr => subArr[0] === arr[0]);
    existing ? existing.push(...arr.slice(1)) : acc.push(arr);
    return acc;
}, []);

console.log(mergedArray);
