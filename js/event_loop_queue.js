// https://medium.com/@seancheongzhenxiong/unit-testing-asynchronous-javascript-understanding-the-priority-of-settimeout-and-promises-dafa75541ec5
// Priority of setTimeout and Promises


const prom = (val) => new Promise((resolve) => {
    console.log('in promise: ', val);
    setTimeout(() => {
        console.log('in promise timeout: ', val);
        resolve(val);
    }, 0);
});

async function f1(val) {
    console.log('func async start ')
    await prom(val + ' in async func awaited');
    // prom(val + ' in async func then').then((val) => console.log('p1 not awaited', val));
    console.log('func async end: ', val)
} 

await f1('test-await');
// f1('test-no-await');


await prom('second-test-await');

console.log('Start synchronous'); 
 
setTimeout(() => { 
 console.log('setTimeout Callback'); 
}, 0); 
 
console.log('End synchronous');