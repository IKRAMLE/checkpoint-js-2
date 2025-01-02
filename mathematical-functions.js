
// Factorial
function factorial(n) {
    if (n < 0) return undefined; 
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i < num; i++) { 
        if (num % i === 0) return false; 
    }
    return true; 
}
// Fibonacci Sequence
function fibonacci(n) {
    var fib = [];
    fib[0] = 0; 
    if (n > 1) {
        fib[1] = 1; 
    }
    
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }
    
    return fib; 
}
