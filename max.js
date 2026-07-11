//1
const disha = 56;
const salman = 95;

if (disha > salman) {
    console.log('disha will get the strswberry')
}
else {
    console.log('salman will eat the strawberry')
}

//inside a function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    else {
        return num2
    }
}
//
const max = getMax(96, 79);
// const max2 = getMax(56,98);
console.log('max of two is :', max)