const print = (...args) => console.log(...['\n', ...args]);
const arr = [-1,0,1,1,5,6,8,1];
const arr1 = [5,6,8,9,11,0];

print('ONELINER EXAMPLES');

print('array content:', arr)
print('isArray: ', Array.isArray(arr), arr instanceof Array);

print('sum of array:', arr.reduce((s,a)=> s+a));

print('remove falsy items of array:', arr.filter(a => a), arr.filter(Boolean));

print('avg of array:', arr.reduce((s,i)=>s+i)/arr.length)

print('merge & remove duplications #1:', arr, '++', arr1,'=>', [...new Set([...arr, ...arr1])])
print('merge & remove duplications #2:', arr, '++', arr1,'=>', [...new Set([].concat(arr, arr1))])

print('shuffle array:', arr.slice().sort(() => Math.random() - 0.5));
// print('test',arr)

print('get last element:', arr[arr.length-1], arr.at(-1), arr.slice(-1)[0], [...arr].pop());

print('unique values:', [...new Set(arr)]);

print('remove not unique values:', arr.slice().filter((i) => arr.indexOf(i)===arr.lastIndexOf(i)));

const str = 'anaconda america united-states';
const capitalize1 = (str) => str[0].toUpperCase()+str.slice(1);
const capitalize2 = (str) => str.replace(/^(.)|(\s.)|[_-](.)/g, (...m)=> 
    (m[1] ? m[1] : m[2] ? `${m[2]}` : m[3] ? `-${m[3]}` : '').toUpperCase()
);

print('capitalize #1', capitalize1(str));
print('capitalize #2', capitalize2(str));

print('weekday #1:', ['N','Pn','Wt','Śr','Czw','Pt','So'][new Date().getDay()]);
print('weekday #2a:', new Date().toLocaleString('pl-PL', { weekday: 'long'}));
print('weekday #2b:', new Date().toLocaleString('pl-PL', { weekday: 'short'}));
print('weekday #2c:', new Date().toLocaleString('pl-PL', { weekday: 'narrow'}));

const random1 = (min,max) => new Date().getTime()%max + min;
const random2 = (min,max) => Math.floor(Math.random()*(max-min+1)) + min;

print('random #1:', random1(0,5));
print('random #2:', random2(0,5));

const randomHexColor = () => '#' + Math.random().toString(16).slice(2,8).padEnd(6,'0');

print('random Color:', randomHexColor());

print('array includes "8" #1:', !!~arr.indexOf(8));
print('array includes "8" #2:', arr.includes(8));

