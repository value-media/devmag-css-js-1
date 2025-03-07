// https://jcubic.pl/2019/02/co-to-jest-transducer.html


const array = [1, 2, 3, 4, 5];
let processElementsArray, processElementsSum,
  resultArray, resultSum;

{
    const map = f => reducing => (result, input) =>
        reducing(result, f(input));
    
    const filter =  predicate => reducing => (result, input) =>
        predicate(input) ? reducing(result, input) : result;
    
    
    const compose = (...functions) => {
        return (input) => 
          functions.reduceRight((acc, fn) => fn(acc), input);
    };
      
    const concat = (xs, x) => xs.concat(x);
    processElementsArray = (filterFn, mapFn) => compose(filter(filterFn), map(mapFn))(concat);

    const sum = (xs, x) => xs + x;
    processElementsSum = (filterFn, mapFn) => compose(filter(filterFn), map(mapFn))(sum);
}

const doubleIt = x => { 
  console.log('doubling: '+ x); return x*2; 
};

const isOdd = x => { 
  console.log('is odd: '+ x + ' => ' + !!(x%2)); return x%2; 
};

console.log('\ninput array: ', array, '\n');
resultArray = array.reduce(processElementsArray(isOdd, doubleIt), []);
console.log('\nresult array:', resultArray, '\n');

resultSum = array.reduce(processElementsSum(isOdd, doubleIt), 0);
console.log('\nresult sum:', resultSum, '\n');
