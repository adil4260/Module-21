const products = [
    { name: 'shampoo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 1 },
    { name: 'shirt', price: 700, quantity: 1 },
    { name: 'pant', price: 1200, quantity: 1 },

]

function cartTotal(products) {
    let total = 0;
    for (const product of products) {
        const thisProductCost = product.price * product.quantity
        total = total + thisProductCost;
    }
    return total;
}
const total = cartTotal(products)
console.log(total)