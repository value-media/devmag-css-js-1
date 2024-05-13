function* asyncGenerator() {
    yield new Promise((res) => setTimeout(() => res(['done this #1!', new Date()]), 200));
    yield new Promise((res) => setTimeout(() => res(['done this #2!', new Date()]), 300));
}

const gen = asyncGenerator();

gen.next().value.then(console.log);
console.log(await gen.next().value);

const patternString = String.raw`The (\w+) is (\d+)`;
const pattern = new RegExp(patternString);
const message = 'The number is 100';
console.log(pattern.exec(message));


let str = "It's just $5, and I have 20PLN or 50 euro."
const regPos = /(?<=\$)\d+/g;
const regNeg = /(?<!\$)\d+/g;

console.log('\n', str)
console.log('positive look-behind:', str.match(regPos));
console.log('negative look-behind:', str.match(regNeg));

str = 'The cat sat on the map';
console.log('\n', str)

console.log(str.replace(/([a-z])(a)(t)/g, '$1*$3'));
console.log(str.replace(/(?<a>[a-z])(a)(?<b>t)/g, '$<a>_$<b>'));
