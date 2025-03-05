// https://jcubic.pl/2019/02/co-to-jest-transducer.html


const array = [1, 2, 3, 4, 5];
let processElements, result;

{
    const map = f => reducing => (result, input) =>
        reducing(result, f(input));
    
    const filter =  predicate => reducing => (result, input) =>
        predicate(input) ? reducing(result, input) : result;
    
    const concat = (xs, x) => xs.concat(x);
    
    const compose = (...functions) => {
        return (input) => {
          return functions.reduceRight((acc, fn) => {
            return fn(acc);
          }, input);
        };
    };
      
    processElements = (filterFn, mapFn) => compose(filter(filterFn), map(mapFn))(concat);
}

const doubleIt = x => { 
  console.log('doubling: '+ x); return x*2; 
};
const isOdd = x => { console.log('is odd: '+ x + ' => ' + !!(x%2)); return x%2; };

console.log('\ninput array: ', array, '\n');
result = array.reduce(processElements(isOdd, doubleIt), []);
console.log('\nresult array:', result, '\n');
