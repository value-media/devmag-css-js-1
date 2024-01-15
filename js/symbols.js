const s = Symbol.for('my-secret');

const obj = {
    [s]: 'dupa',
    age: 42,
    name: 'Jasio',
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') {
        return this.age;
      }
      if (hint === 'string') {
        return this.name;
      }
      return null;
    }
}

console.log('obj', obj, ', keys:', Object.keys(obj));

for(const key in obj) {
    console.log('obj key:', key);
}

  
  console.log(Number(obj)); 
  console.log(String(obj)); 
  console.log(Symbol.keyFor(s));