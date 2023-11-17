const array = ['378', '122', '453', '378', '378', '378', '122', '555'];

const groupedArray = array.reduce((acc, currentValue) => {
    const foundGroup = acc.find(group => group.includes(currentValue));
    if (foundGroup) {
        foundGroup.push(currentValue);
    } else {
        acc.push([currentValue]);
    }
    return acc;
}, []);

console.log(groupedArray)

const lengthsArray = groupedArray.map(group => group.length);

console.log(lengthsArray);
