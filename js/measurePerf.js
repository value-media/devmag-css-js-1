export const measurePerformance = function (func, arg, label = '') {
    console.log('----------------------------------------------------------------------------------------------------------');
    const start = performance.now();
    const result = func(arg)
    const end = performance.now();
    result && console.log(`Result: ${result}, ${label}`);
    console.log(`Time taken for ${func.name}: ${numFormat.format(end-start)} miliseconds.`);
    console.log('');
}

const numFormat = new Intl.NumberFormat("pl-PL", { minimumFractionDigits: 3 })