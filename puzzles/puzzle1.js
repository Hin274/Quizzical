const randomArray = ["hello", "world", "john", "smith"];

// Return the index of the value given

const myFunction = (value) => {

    // TODO
    const result = randomArray.indexOf(value);
    console.log(result);
    return result;

}


console.log("result is:" + (myFunction("world") == 1));
console.log("result is:" + (myFunction("smith") == 3));
console.log("result is:" + (myFunction("something else") == -1));
