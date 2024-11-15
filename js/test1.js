// https://medium.com/@arnoldgunter/the-most-difficult-javascript-interview-question-2a0cd7bced4c

function Foo() {
    this.value = 42;
}
  
Foo.prototype.getValue = function() {
    return this.value;
};
  
// Foo.prototype.getValue = () => {
//     return this.value;
// };

const obj1 = new Foo();
const obj2 = {
    value: 24,
    getValue: obj1.getValue
};

console.log('A ', obj1.getValue());      // A 42
console.log('B ', obj2.getValue());      // B 24

setTimeout(function() {
    console.log('C ', obj1.getValue());    // C  84       
    obj2.value = 100;
    console.log('D ', obj2.getValue());    // D 100
}, 0);

Promise.resolve().then(() => {
    obj1.value = 84;
    console.log('E ', obj1.getValue());    // E 84
});

console.log('F ', obj1.getValue()); // F 42