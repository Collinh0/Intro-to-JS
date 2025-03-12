/**
 * Objects
 */
const order = {
    cost: 700,
    customer: {
        name: 'Jane Doe',
        phone: "0791698646",
        emailAddress: 'janeDoe@gmail.com'
    },
    items: [
        {
            name: 'Fries',
            quantity: 2,
            price: 100,
            isAdult: false
        },
         {
            name: 'choma',
            price: 500,
            quantity: 1,
            isAdult: true

        }
    ],
    colors: ['black', 'white'],
    cr: 7
};
console.log(order.colors)



//Access values using the dot notation(.) or the square bracket []
console.log(order.cost)
console.log(order['customer'].name)
console.log(order.items[0].quantity)
console.log(order.items[1]['name'])
const customer = 'customer'

//Adding,updating and deleting
order.table = "table 8" //add key -> table did not exist before
order.cost = 1000 //updating
delete order.cr //deleting

console.log(order.cr)

//Object iteration using for...in
for (const brian in order) {
    console.log(brian)
}

//for later on
const total = order.items.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)
console.log(total)

const prices = order.items.map((item) => ({itemPrice: item.price}))
console.log(prices)