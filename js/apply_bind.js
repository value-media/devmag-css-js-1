// https://medium.com/coding-beauty/bind-vs-call-vs-apply-js-392ea94141ad

class Person {
    props = { name: 'Tari' };

    constructor(props) {
        props && (this.props = props);
    }

    greet(info = ' => ') {
        console.log(info, `Hi, i'm ${this?.props?.name}!`, this);
    }
}

const p = new Person();
p.greet();
const greet = Person.prototype.greet;
greet('greet:');


const greetB = Person.prototype.greet.bind(p);
greetB('greetB:');

const p2 = new Person({ name: 'Ibaba' });
Person.prototype.greet.bind(p2)('bind p2: ');

Person.prototype.greet.call(p2, 'call p2:');
Person.prototype.greet.apply(p2, ['apply p2:']);