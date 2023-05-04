/**
 * 
 * Function should return the number of types of food it found in the basket. Handle bad data given to method
 * 
 *  e.g.
 *      getBasketTotalType(["banana"]) should return {fruit: 1, poutry: 0}
 *      getBasketTotalType(["apple", "fish"]) should return {fruit: 1, poutry: 1}
 *      getBasketTotalType(["pie", "lamb", "fish"]) should return {fruit: 0, poutry: 2}
 *      getBasketTotalType([null, "apple", null]) should return {fruit: 1, poutry: 0}
 *      getBasketTotalType([]) should return {fruit: 0, poutry: 0}
 * 
 */
const data = [
    {
        name: "apple",
        cost: 1,
        type: 'fruit'
    },
    {
        name: "banana",
        cost: 2,
        type: 'fruit'
    },
    {
        name: "lamb",
        cost: 5,
        type: 'poutry'
    },
    {
        name: "fish",
        cost: 8,
        type: 'poutry'
    }
];

const getBasketTotalType = (basketItems) => {
    const result = { fruit: 0, poutry: 0 }

    // TODO
    if (basketItems) {
        for (i = 0; i < basketItems.length; i++) {
            for (j = 0; j < data.length; j++) {
                const checkItems = basketItems[i] == data[j].name
                if (checkItems) {
                    if (data[j].type == "poutry") {
                        result.poutry += 1
                    }
                    else if (data[j].type == "fruit") {
                        result.fruit += 1
                    }
                }
            }

        }
    }
    return result;
}

console.log('-----Start running for example one------');
console.log(getBasketTotalType(["banana"])) // should return {fruit: 1, poutry: 0}

console.log('-----Start running for example two ------');
console.log(getBasketTotalType(["apple", "fish"]))  // should return {fruit: 1, poutry: 1}

console.log('-----Start running for example three ------');
console.log(getBasketTotalType(["pie", "lamb", "fish"]))  // should return {fruit: 0, poutry: 2}

console.log('-----Start running for example four------');
console.log(getBasketTotalType([null, "apple", null])) //  should return {fruit: 1, poutry: 0}

console.log('-----Start running for example five------');
console.log(getBasketTotalType([]))  // should return {fruit: 0, poutry: 0}