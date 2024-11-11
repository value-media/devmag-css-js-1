// https://techmade.medium.com/javascript-one-liners-for-senior-frontend-engineers-33faa0f1640b

const randomString = () => Math.random().toString(36).slice(2);

console.log(randomString());
console.log(randomString());
console.log(randomString());

/////////////////////////////////////////////////////////////////////////////

const escapeFunc = (str) => str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
const uppercaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
const toCamelCase = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));

const decodedHtml = escapeFunc('<div>Hello world!</div>');
const uppercasedWord = uppercaseWords('hello world');
const camelcasedWord = toCamelCase('hello world');

console.log({decodedHtml, uppercasedWord, camelcasedWord});

/////////////////////////////////////////////////////////////////////////////
const flatRecursion = (arr) => [].concat.apply([], arr.map((a) => (Array.isArray(a) ? flatRecursion(a) : a)));
const flatReduce = (arr) => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flatReduce(b)] : [...a, b]), []);

const array = [ 1, 2, 3, [5, 6] ];
const 
    flatByRecursion = flatRecursion(array),
    flatByReduce = flatReduce(array);

console.log({ array, flatByRecursion, flatByReduce });

/////////////////////////////////////////////////////////////////////////////

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomBetween50to60 = () => randomBetween(50, 60);

console.log('randomBetween5to10', [
    randomBetween50to60(),
    randomBetween50to60(),
    randomBetween50to60(),
    randomBetween50to60()
]);

/////////////////////////////////////////////////////////////////////////////
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
const avg = average(1,2,2,3,4);
console.log({avg});

/////////////////////////////////////////////////////////////////////////////



