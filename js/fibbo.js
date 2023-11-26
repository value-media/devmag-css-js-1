import { measurePerformance } from './measurePerf.js'; 

function fibonacciOriginalRecurrence(n) { // najwolniesza
    if (n <= 2) return 1;
    return fibonacciOriginalRecurrence(n-1) + fibonacciOriginalRecurrence(n-2);
}

function fibonacciMemoizedRecurrence(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n]= fibonacciMemoizedRecurrence(n-1, memo) + fibonacciMemoizedRecurrence(n-2, memo); 
    return memo[n];
}

function fibonacciIterative(n) { // najszybsza
    if (n <= 2) return 1;
    let prev2 = 0;
    let prev1 = 1;
    let curr;

    for(let i = 2; i <= n; i++) {
        curr = prev2 + prev1;
        prev2 = prev1;
        prev1 = curr;
    }

    return curr;
}

measurePerformance(fibonacciOriginalRecurrence, 35);
measurePerformance(fibonacciMemoizedRecurrence, 35);
measurePerformance(fibonacciIterative, 35);