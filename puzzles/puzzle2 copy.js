//const randomObject = { "personA": { age: 3, name: 'john' }, "personB": { age: 5, name: 'harry' }, "personC": { age: 3, name: 'Mary' } };
const randomArray = [{ age: 3, name: 'john' }, { age: 5, name: 'harry' }, { age: 6, name: 'mary' }];

/**
 * 
 * Function is the return the "age" of the person's name given (function should be case insensitive)
 * 
 *  e.g. "john" should return 3
 *  e.g. "tim" should return 0
 * 
 */



const myFunction = (value) => {
    for (i = 0; i < randomArray.length; i++) {
        console.log(age)
    }
}

console.log("result is: " + (myFunction("john"))); // should return 3
console.log("result is: " + (myFunction("tim"))); // should return 0
console.log("result is: " + (myFunction("Mary"))); // should return 6