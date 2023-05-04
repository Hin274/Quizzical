const randomArray = ["hello", "world", "john", "smith"];

/**
 * 
 * Function is the return the number of times the letter given is found in the array
 * 
 * For example, the above should return 3 for when the function is called with "o".
 *      myFunction("o") === 3 // should return true  
 * 
 *      myFunction("z") === 0 // should return true
 */



const myFunction = (value) => {
    let count = 0
    for (i = 0; i < randomArray.length; i++) {

        const wordInArray = randomArray[i];

        for (j = 0; j < wordInArray.length; j++) {
            if (wordInArray[j] == value) {
                count++
            }
        }
    }
    return count
}

console.log("result is: " + (myFunction("o"))); // should return 3
console.log("result is: " + (myFunction("z"))); // should return 0
console.log("result is: " + (myFunction("l"))); // should return 3