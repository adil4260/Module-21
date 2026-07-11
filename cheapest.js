const phones = [
    { name: 'sumsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'xoami', price: 18000, camera: '12mp', color: 'black' },
    { name: 'oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 200000, camera: '12mp', color: 'black' },
    { name: 'walton', price: 2000, camera: '12mp', color: 'black' },
    { name: 'htc', price: 1000, camera: '12mp', color: 'black' },
]

function getCheapestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone
        }
    }
    return min;
}
const cheap = getCheapestPhone(phones)
console.log(cheap)