// closure function
const createCounter = (initialValue) => {
    let counter = initialValue;
    return {
        inc: () => ++counter,
        decr: () => --counter
    }
}

console.log('Closure function:');
const counter = createCounter(5);
console.log('counter', counter.inc(), counter.inc(), counter.decr(), '\n');


// IIFE - Immediately Invoked Function Expression
(function() {
    console.log('Anonymous function');
    const person = { name: 'John', age: 43 };
    for(const key in person) {
        console.log('person key: ', key, ' with value: ', person[key]);
    }
    console.log('\n');
})();

((obj) => {
    console.log('Fat arrow function:');
    console.log('object keys: ', Object.keys(obj));
    console.log('\n');
})({ name: 'John', age: 43 });

(function getObjectEntries(obj) {
    console.log('regular function');
    console.log('object entries: ', Object.entries(obj));
    console.log('\n');
})({ name: 'John', age: 43 });

