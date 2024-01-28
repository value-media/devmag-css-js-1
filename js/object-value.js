const objName = {
    name: 'John',
    [Symbol.toPrimitive]() { // pririty: 1
        return `${this.name} Wick`;
    },
    valueOf() { // pririty: 2
        return `${this.name} Rambo`;
    },
    toString() { // pririty: 3
        return `${this.name} Malkovitch`;
    }
}

const objNumber = {
    n: 1,
    [Symbol.toPrimitive](type) {
        // if (type == 'number') return this.n++;
        if (type == 'string') return ` [${this.n++}] `;
        return this.n++;
    },
    valueOf() { return this.n++; },
    toString() { return `(${this.n++}) ` }
}

console.log(objName+'');
console.log(objNumber+objNumber+objNumber);
console.log(''+objNumber+objNumber+objNumber);
console.log(`${objNumber}${objNumber}${objNumber}`);
console.log(+objNumber);
console.log(String(objNumber));
console.log(objNumber.toString());


const arr = [1,2,3,4,5,6,7,8,9,0];
const randomSort = (array) => array.sort(() => 0.5 - Math.random());
console.log(randomSort(arr));
console.log(randomSort(arr));
console.log(randomSort(arr));

for(const e of arr.entries()) {
    console.log(e);
}
console.log('entries:', [...arr.entries()].map(([i,v]) => `${i} => ${v}`));


// https://medium.com/@adarshrai3011/53-javascript-frontend-interview-questions-e6013116eaa0
