const randomObject = {
    "john": {
        age: 3,
        gender: 'M'
    },
    "harry": {
        age: 5,
        gender: 'M'
    },
    "mary": {
        age: 6,
        gender: 'F'
    },
    "Bob": {
        age: 9,
        gender: "M"
    }
};

/**
 * 
 * Function is the return the "age" of the person's name given (function should be case insensitive)
 * 
 *  e.g. "john" should return 3
 *  e.g. "tim" should return 0
 * 
 * Also, make sure you handle when value is: null or undefined (bad data). When value is null or undefined, return -1
 */



const myFunction = (value) => {
    /*
    const result = randomObject[value];
    if(result !== null && result !== undefined)    { // if(randomObject.hasOwnProperty(value))     if(randomObject[value])     if(randomObject[value] !== null && randomObject[value] !== undefined)    
        return randomObject[value].age
    } else {
        return 0
    }*/

    if (value === null || value === undefined) {
        return -1
    } else if (!(value.toLowerCase() in randomObject)) {
        return 0
    }
    else {
        return randomObject[value.toLowerCase()].age
    }

    /*    
    if (!value) { // value === null || value === undefined
        return -1;
    }
    const result = randomObject[value.toLowerCase()];
    if (!result) {
        return 0;
    }
    else {
        return result.age;
    }
    */
}


console.log('-----Start running for John------')
console.log("john result is: " + (myFunction("john"))); // should return 3

console.log('-----Start running for Tim------')
console.log("tim result is: " + (myFunction("tim"))); // should return 0

console.log('-----Start running for Mary------')
console.log("Mary result is: " + (myFunction("Mary"))); // should return 6

// console.log('-----Start running for bob------')
// console.log("bob result is: " + (myFunction("bob"))); // should return 9

console.log('-----Start running for null------')
console.log("null result is: " + (myFunction(null))); // should return -1

console.log('-----Start running for undefined------')
console.log("undefined result is: " + (myFunction(undefined))); // should return -1
