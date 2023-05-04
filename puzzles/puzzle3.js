//const randomObject = { "personA": { age: 3, name: 'john' }, "personB": { age: 5, name: 'harry' }, "personC": { age: 3, name: 'Mary' } };
const randomArray = [{ age: 1, name: 'sally' }, { age: 3, name: 'john' }, { age: 5, name: 'harry' }, { age: 6, name: 'mary' }, { age: 9, name: 'Bob' }];

/**
 * 
 * Function is the return the "age" of the person's name given (function should be case insensitive)
 * 
 *  e.g. "john" should return 3
 *  e.g. "tim" should return 0
 * 
 */



const myFunction = (value) => {
    const valueUpdated = value.toLowerCase();
    console.log('Value being compared is: ' + valueUpdated);

    for (i = 0; i < randomArray.length; i++) {
        console.log(randomArray[i])
        const dataUpdated = randomArray[i].name.toLowerCase();
        if (valueUpdated == dataUpdated) {
            console.log("if statement return")
            return randomArray[i].age
        } else {
            console.log("not returned")
        }
    }

    return 0;
}

console.log('-----Start running for John------')
console.log("john result is: " + (myFunction("john"))); // should return 3
console.log('-----Start running for Tim------')
console.log("tim result is: " + (myFunction("tim"))); // should return 0
console.log('-----Start running for Mary------')
console.log("Mary result is: " + (myFunction("Mary"))); // should return 6
console.log('-----Start running for bob------')
console.log("bob result is: " + (myFunction("bob"))); // should return 9