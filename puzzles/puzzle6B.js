/**
 * Same as question 6, but made the data slightly complex
 * 
 * Function should return the total cost of the grocery. Handle bad data given to method
 * 
 *  e.g.
 *      getBasketTotalCost(["banana"]) should return 2
 *      getBasketTotalCost(["apple", "fish"]) should return 9
 *      getBasketTotalCost(["pie", "lamb"]) should return 5
 *      getBasketTotalCost([null, "apple", null]) should return 1
 *      getBasketTotalCost([]) should return 0
 * 
 */
const data = {
    "apple": {
        cost: {
            price: 1,
            currency: "GBP",
        },
        type: 'fruit'
    },
    "banana": {
        cost: {
            price: 2,
            currency: "GBP",
        },
        type: 'fruit'
    },
    "lamb": {
        cost: {
            price: 5,
            currency: "GBP",
        },
        type: 'poutry'
    },
    "fish": {
        cost: {
            price: 8,
            currency: "GBP",
        },
        type: 'poutry'
    }
};

const getBasketTotalCost = (basketItems) => {
    // TODO
    let totalCost = 0

    for (i = 0; i < basketItems.length; i++) {
        const item = basketItems[i]
        if (item in data) {

            totalCost += data[item].cost.price
        }
    }
    return totalCost
}

console.log('-----Start running for example one------');
console.log(getBasketTotalCost(["banana"])) // should return 2

console.log('-----Start running for example two ------');
console.log(getBasketTotalCost(["apple", "fish"]))  // should return 9

console.log('-----Start running for example three ------');
console.log(getBasketTotalCost(["pie", "lamb"]))  // should return 5

console.log('-----Start running for example four------');
console.log(getBasketTotalCost([null, "apple", null])) //  should return 1

console.log('-----Start running for example five------');
console.log(getBasketTotalCost([]))  // should return 0