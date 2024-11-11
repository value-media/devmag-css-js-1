const arr = [ '1', '5', '11' ];

console.log('parseInt 1', arr.map(parseInt));
console.log('parseInt 2', arr.map(v => +v));

arr.map(console.log);