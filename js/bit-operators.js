
// bit operators

let arr = Array(25)
    .fill(0)
    .map((_, i) => ({
        i, 'i&1':i&1, 'i&2':i&2, 'i&3':i&3, 'i&4':i&4, 'i&5':i&5, 'i&6':i&6, 'i&7':i&7, 'i&8':i&8
    }));
console.table(arr);

arr = Array.from(Array(25), (_,i) => i + -1.45)
    .map(x => ({
        x, '~x':~x, '~~x':~~x, 'x>>0': x>>0, 'x<<0': x<<0, 'x|0':x|0
    }));

console.table(arr);
