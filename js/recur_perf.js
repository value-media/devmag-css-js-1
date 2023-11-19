import { measurePerformance } from './measurePerf.js'; 

const randomArr = Array.from({ length: 1000000 }, () => { Math.random});
randomArr.push('banana');

function findBanana(arr) {
    return arr.includes('banana');
}

function findBananInSet(arrSet) {
    return arrSet.has('banana');
}

function findBananBySet(arr) {
    const aset = new Set(arr);
    return aset.has('banana');
}

measurePerformance(findBanana, randomArr);
measurePerformance(findBananBySet, randomArr);
measurePerformance(findBananInSet, new Set(randomArr));
console.log('----------------------------------------------------------------------------------------------------------');
