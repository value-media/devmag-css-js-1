

console.log('[] == ![] => ',[] == ![]);
console.log(27..toString());

let f1 = () => {};
let f2 = () => ({});
console.log('f1() => ', f1());
console.log('f2() => ', f2());

const f3 = () => {
    try {
        return 2;
    } finally {
        return 3;
    }
};
console.log('f3() => ', f3());

console.log('[...[..."..."]].length => ', [...[...[..."..."]]].length);

console.log.apply(a => a, [1, 2]);

//  -------------------------------------------------------------------------------------------------
function Person(name) {
    this.name = name;

    this.sayHello = function(name) {
        console.log(`Hi${name ? (' ' + name) : ''}, my name is ${this.name}`);
    }
}
const person = new Person('Janek');
person.sayHello();
person.sayHello.bind(new Person('Józek'))('Marysia');
person.sayHello.call(new Person('Johny'), ['Marie']);
person.sayHello.apply(new Person('John'), ['Marianne']);

//  -------------------------------------------------------------------------------------------------

const osoba = {
    imie: 'Jasio',
    Witaj: function (imie) {
        console.log(`Witaj${imie ? (' ' + imie) : ''}, jestem ${this.imie}!`);
    }
}

osoba.Witaj();
const witaj2 = osoba.Witaj.bind({imie:'Józio'}, ['Milonka'])
witaj2();
osoba.Witaj();

//  -------------------------------------------------------------------------------------------------

console.log(`3  - 1 => `, 3  - 1);
console.log(`3  + 1 => `, 3  + 1);
console.log(`'3' - 1 => `, '3' - 1);
console.log(`'3' + 1 => `, '3' + 1);
console.log(`'' + '' => `, '' + '');
console.log(`+[] => `, +[]);
console.log(`[] + '' => `, [] + '');
// console.log(`[] + [] => `, [] + []);
// console.log(`{} + [] => `, {} + []);
// console.log(`[] + {} => `, [] + {});
// console.log(`{} + {} => `, {} + {});
console.log(`'222' - -'111' => `, '222' - -'111');
console.log(`[4] * [4] => `, [4] * [4]);
console.log(`[4] * [] => `, [4] * []);
console.log(`1 + true => `, 1 + true);

console.log(`1 < 2 < 3 => `, 1 < 2 < 3);
console.log(`3 > 2 > 1 => `, 3 > 2 > 1);
console.log(`3 > 2 >= 1 => `, 3 > 2 >= 1);

