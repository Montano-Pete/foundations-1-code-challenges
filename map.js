// Use the map method to solve these problems!

/*
Input:

[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]

*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNamesWithMap(arr) {
    const names = [];
    arr.map((pet) => {
        names.push(pet.name);
    })

    return names;
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const hungry = [];
    arr.map((pet) => {
        hungry.push(pet.isHungry = true);
    })
    return arr;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    let shoutingArray = [];
    arr.map((pet) => {
        shoutingArray.push({name: pet.name.toUpperCase(), type: pet.type});
    })
    return shoutingArray;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    let stringArray = [];
    arr.map((pet) => {
        stringArray.push(`${pet.name}${pet.type}`);
    })
    return stringArray;
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    const arrayception = [];
    arr.map((pet) => {
        arrayception.push([['name', `${pet.name}`], ['type', `${pet.type}`] ]);
    })

    return arrayception;
}