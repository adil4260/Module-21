//2
const jim = 65;
const tim = 89;
const kim = 658;
if (jim > tim && jim > kim) {
    console.log('Jim is the boss')
}
else if (tim > jim && tim > kim) {
    console.log('Tim is boss')
}
else {
    console.log('Kim is ultimate boss')
}


//in functrion
function findBoss(jim, tim, kim) {
    if (jim > tim && jim > kim) {
        return 'Jim is the boss';
    }
    else if (tim > jim && tim > kim) {
        return 'Tim is the boss';
    }
    else {
        return 'Kim is the ultimate boss';
    }
}

const result = findBoss(65, 89, 658);
console.log(result);


//
const maf = Math.max(12, 23, 26, 56, 49, 98, 76, 4543)
console.log('max using Math.max', maf)