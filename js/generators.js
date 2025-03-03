function* countToN(n) {
    for(let i = 1; i <= n; i++) {
        yield i;
    }
}

function print1to10() {
    for(const i of countToN(10)) {
        console.log(i);
    }    
} 

function* typeGenerator(text) {
    for(const l of text) {
        yield l;
    }
}

function printText(text) {
    for(const l of typeGenerator(text)) {
        console.log(l)
    }    
}

printText('Hello world');

const arr = new Array(100).fill(0).map((_, i) => i+1);

function* paginateItems(items, pageSize = 10) {
    for(let i = 0; i < items.length; i += pageSize) 
        yield items.slice(i, i + pageSize);
}
const items = paginateItems(arr);
// console.log(items.next().value);
// console.log(items.next().value);

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const map = fn => (accumulator, element) => accumulator.concat(fn(element));
const filter = fn => (accumulator, element) => fn(element) ? accumulator.concat(element) : accumulator;

const xform = compose(
    map(x => x * 2),
    filter(x => x > 50),
    take(5)
);

const result = transduce(xform, pushing, [], arr);
console.log('result', result)
