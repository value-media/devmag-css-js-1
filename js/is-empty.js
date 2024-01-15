const symbol = Symbol.for('secret');

const obj = {
    undef: undefined,
    func: function() {},
    symb: Symbol(),
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

  console.log('obj', obj);
  console.log('\nstrigify:', JSON.stringify(obj));
  console.log('\nlistPropertiesInObject:');listPropertiesInObject(obj);
  console.log('\nlistPropertiesByKeys:');listPropertiesByKeys(obj);
  console.log('\nlistOwnPropertyNames:');listOwnPropertyNames(obj);
  console.log('\nlistOwnPropertySymbols:');listOwnPropertySymbols(obj);
  console.log('\nlistReflectOwnKeys:');listReflectOwnKeys(obj);




