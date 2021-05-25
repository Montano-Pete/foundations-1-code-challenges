// Use the filter or find array methods to solve these problems

/* 
Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/

export function getAllDairy(arr) {
    const dairyString = arr.filter((dairy) => {
        return dairy.category === 'dairy';
    })
    return dairyString;
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    const moreThanTwo = arr.filter((two) => {
        return two.price === 3;
    })
    return moreThanTwo;
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    const findCheese = arr.find(cheese => {
        return cheese.id === 'cheese';
    })
    return findCheese;
}

/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    const justFruits = arr.filter(fruit => {
        return fruit.id.charAt(0) === 'o' || fruit.id.charAt(0)=== 'k';
    })

    const newFunction = justFruits.map(item => {
        return item.id;
    })
    
    return newFunction;
}



// export function findTheCheese(arr) {
//     const newArr = arr.find(item => {
//         return item.id === 'cheese'
//     })
//     return newArr
//   }