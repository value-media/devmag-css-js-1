function numFormat(num) {
    return num.toString().replace(/(?!^)(?=(\d{3})+$)/g, ',');
}

console.log('number format: ', numFormat(1234567890));