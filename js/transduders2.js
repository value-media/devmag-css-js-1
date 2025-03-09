const concat = (xs, x) => xs.concat(x);
const map = f => (acc, el) => concat(acc, f(el));
const filter = p => (acc, e) => p(e) ? concat(acc, e) : acc;

const processElement = (filterFn, mapFn) => (acc, e) => 
    filterFn(e) ? concat(acc, mapFn(e)) : acc;    
const processElements = (filterFn, mapFn) => 
    arr => arr.reduce(processElement(filterFn, mapFn), []);

const doubleIt = x => { console.log('doubling: '+ x); return x*2; };
const isOdd = x => { console.log('is odd: '+ x + ' => ' + !!(x%2)); return x%2; };

const array = [1, 2, 3, 4, 5];

const result = processElements(isOdd, doubleIt)(array);

console.log('\ninput array: ', array);
console.log('result array:', result, '\n');
