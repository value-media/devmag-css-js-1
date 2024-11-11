console.time('app');
const person = {
    name: 'John',
    age: 23,
    gender: 'male',
    address: {
        city: 'Warsaw',
        street: 'Marszałkowska 100'
    }
};
const p2 = structuredClone(person);
p2.address.city = 'Warszawa';
p2.name = 'Jan';
console.dir(person);
console.dir(p2);
console.count('step');
const checkCurrency = (currency, amount, exchange_rate) => {
    console.log({currency, amount, exchange_rate});
    console.log(`${amount}${currency[0]} => ${amount*exchange_rate}PLN`)
}
const html = (labels, ...values) => {
    let txt = '';
    for(const l in labels.filter(lb => lb)) {
        txt += `<div> ${labels[l]}: <span>${values[l]??''}</span> </div>\n`
    }
    return txt;
}
const kwota = 200, kurs = 4, kwota2=1000;
const tmpl = html`USD${kwota}PLN${kwota2}`;

console.log(tmpl);

console.count('step');
let user = { name: 'User' };
let map = new Map();
let weakMap = new WeakMap();
map.set(user, 'John');
weakMap.set(user, 'John');

// user = null;

console.log('map', map.get(user));
console.log('weak map', weakMap.get(user));
console.log('map keys', map.keys());
console.log('weak map keys', weakMap.has(user), weakMap.toString());


console.timeEnd('app');