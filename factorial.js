"use strict"

function factorial(n) {
    if (n > 10 | n < 1) {
        return undefined;
    }
    let factorialOfn = 1;

    for(let i=n; i>1; i--) {
        factorialOfn *= i;
    }

    return factorialOfn;
}

if ('undefined' !== typeof module) {
    exports.factorial = factorial;
}
