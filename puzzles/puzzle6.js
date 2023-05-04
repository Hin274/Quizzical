/**
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
 *      unknown items should be treated as cost of 0
 * 
 */
const data = {
    apple: {
        cost: 1,
        type: 'fruit'
    },
    banana: {
        cost: 2,
        type: 'fruit'
    },
    lamb: {
        cost: 5,
        type: 'poutry'
    },
    fish: {
        cost: 8,
        type: 'poutry'
    }
};

const getBasketTotalCost = (basketItems) => {
    // TODO
    let totalCost = 0

    for (i = 0; i < basketItems.length; i++) {
        const item = basketItems[i]
        if (item in data) {

            totalCost += data[item].cost
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