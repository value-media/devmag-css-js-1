const symbol = Symbol.for('secret key by Symbol');

const obj = {
    undefined_value: undefined,
    function_value: function() {},
    symbol_value: Symbol(),
    [symbol]: 'secret content'
};

Object.prototype.proto = 10;
Object.defineProperty(obj, 'non-enum', {
    value: 1,
    enumerable: false
});

Object.defineProperty(obj, 'is-enum', {
    value: { name: 'F' },
    enumerable: true
});

function listPropertiesInObject(obj) {
    for(const p in obj) { 
        let label = obj.hasOwnProperty(p) ? 'own' : 'ext';
        console.log(`${label} property: ${p}, value: (${typeof obj[p]}):`, obj[p]);
    }
}

function listPropertiesByKeys(obj) {
    for(const p of Object.keys(obj)) { 
        let label = 'key';
        console.log(`${label} property:`, p);
    }
}

function listOwnPropertyNames(obj) {
    for(const p of Object.getOwnPropertyNames(obj)) { 
        console.log(`own property name: ${p}, value: (${typeof obj[p]}):`, obj[p]);
    }
}

function listOwnPropertySymbols(obj) {
    for(const p of Object.getOwnPropertySymbols(obj)) { 
        console.log(`symbol for "${Symbol.keyFor(p)}": , value: (${typeof obj[p]}):`, obj[p]);
    }
}

function listReflectOwnKeys(obj) {
    for(const p of Reflect.ownKeys(obj)) { 
        const label = typeof p == 'symbol' ? `Symbol for ${Symbol.keyFor(p)}` : `${p}`;
        console.log(`own key name: "${label}", value: (${typeof obj[p]}):`, obj[p]);
    }
}

function printVisibilityTable() {
    const methods = [];

    const obj1 = { method_name: 'in Object' };
    for(const p in obj) { obj1[p] = 'visible'; }
    methods.push(obj1);

    const obj2 = { method_name: 'Object.keys' };
    for(const p of Object.keys(obj)) { obj2[p] = 'visible'; }
    methods.push(obj2);

    const obj3 = { method_name: 'getOwnPropertyNames' };
    for(const p of Object.getOwnPropertyNames(obj)) { obj3[p] = 'visible'; }
    methods.push(obj3);

    const obj4 = { method_name: 'getOwnPropertySymbols' };
    for(const p of Object.getOwnPropertySymbols(obj)) { obj4[Symbol.keyFor(p)] = 'visible'; }
    methods.push(obj4);

    const obj5 = { method_name: 'Reflect.ownKeys' };
    for(const p of Reflect.ownKeys(obj)) { 
        const label = typeof p == 'symbol' ? Symbol.keyFor(p) : `${p}`;
        obj5[label] = 'visible'; 
    }
    methods.push(obj5);
    
    console.log('\n Visibility of property in Object');
    console.table(methods);
}

console.log('obj', obj);
console.log('\nstrigify:', JSON.stringify(obj));
console.log('\nlistPropertiesInObject:');listPropertiesInObject(obj);
console.log('\nlistPropertiesByKeys:');listPropertiesByKeys(obj);
console.log('\nlistOwnPropertyNames:');listOwnPropertyNames(obj);
console.log('\nlistOwnPropertySymbols:');listOwnPropertySymbols(obj);
console.log('\nlistReflectOwnKeys:');listReflectOwnKeys(obj);

printVisibilityTable();


