function* countToN(n) {
    for(let i = 1; i <= n; i++) {
        yield i;
    }
}

function print1to10() {
    for(const i of countToN(10)) {
        console.log(i);
    }    
} 

function* typeGenerator(text) {
    for(const l of text) {
        yield l;
    }
}

function printText(text) {
    for(const l of typeGenerator(text)) {
        console.log(l)
    }    
}

printText('Hello world');