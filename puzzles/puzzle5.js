/**
 * 
 * Function: return how many time does the letter appear in the array. Make sure to handle bad data given in argument (e.g. null/undefined)
 * 
 *  e.g.
 *      myFunction(["hello", "world"], "o") should return 2
 *      myFunction(["hello", "world"], "z") should return 0
 *      myFunction([null, "world"], "w") should return 1
 *      myFunction(["hello", "world"], null) should return 0
 */

const myFunction = (arrayValues, letter) => {
    // TODO
    let count = 0
    if (letter) {
        for (i = 0; i < arrayValues.length; i++) {
            const wordInArray = arrayValues[i];

            /*
            if(!wordInArray){
                continue; // stops running the loop for "i", and increments "i"
            }
            */

            if (wordInArray) {
                for (j = 0; j < wordInArray.length; j++) {
                    if (wordInArray[j] == letter) {
                        count++
                    }
                }
            }

        }
    }
    return count
}

console.log('-----Start running for first array------');
console.log(myFunction(["hello", "world", "jim"], "o")); // should return 2

console.log('-----Start running for second array------');
console.log(myFunction(["hello", "world"], "z")); // should return 0

console.log('-----Start running for third array------');
console.log(myFunction([null, undefined, "world"], "w")); // should return 1

console.log('-----Start running for fourth array------');
console.log(myFunction(["hello", "world"], null)); // should return 0
