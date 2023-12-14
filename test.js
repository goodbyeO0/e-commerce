const arrayOfObjects = [
    { id: 5114 },
    { id: 5114 },
    { id: 38524 },
    { id: 38524 },
    { id: 11061 }
];

const groupedArray = Object.values(
    arrayOfObjects.reduce((acc, { id }) => {
        if (!acc[id]) {
            acc[id] = [id];
        } else {
            acc[id].push(id);
        }
        return acc;
    }, {})
);

console.log(groupedArray);
