'use strict';

/**
 * 
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation 
 * @returns 
 */

function mathOperation (arg1, arg2, operation) {
    switch (operation){
        case "+": 
            return addition(arg1, arg2);
        case "-": 
            return subtraction(arg1, arg2);
        case "*": 
            return multiplication(arg1, arg2);
        case "/": 
            return division(arg1, arg2);
    }
}

console.log(mathOperation(5, 9, "+"));
console.log(mathOperation(5, 9, "-"));
console.log(mathOperation(5, 9, "*"));
console.log(mathOperation(5, 9, "/"));