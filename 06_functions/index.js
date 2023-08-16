'use strict';

/**
 * Функції в деталях
 * @author Miroslav
 */

/**
 * Оголошення та виклик
 */

// let name = 'Oleg';

// function sayHi(name = 'John') {
//     // let name = 'Ivan';
//     console.log(`Hi ${name}`);
// }
//
// const name = 'Anna';
// sayHi();

/**
 * Директива "return"
 */

// function add(num1, num2) {
//     return num1 + num2;
// }
//
// console.log(add(2, 2));
/**
 * У функції може бути багато "return"
 */
// function calc(num1, num2, operand) {
//     if (operand === '-') {
//         return num1 - num2;
//     }
//     if (operand === '+') {
//         return num1 + num2;
//     }
// }
//
// console.log(calc(10, 2, '+'));

/**
 * Function Declaration
 */
// console.log(add(2, 3));

// function add(num1, num2) {
//     return num1 + num2;
// }

// if (true) {
//     function add(num1, num2) {
//         return num1 + num2;
//     }
// }

/**
 * Function Expression
 */

// const add = function add(num1, num2) {
//     return num1 + num2;
// }
//
// console.log(add(2, 3));

/**
 * Function Expression
 */

/**
 * Arrow Functions
 */

const add = (num1, num2) => num1 + num2;

console.log(add(2, 5));
/**
 * IIFE
 */

// (function () {
//     console.log('Hi!');
// })();

/**
 * Рекурсія
 */

// function recSumTo(number) {
//     if(number === 1) {
//         return 1;
//     }
//     return number + recSumTo(number-1);
// }
//
// console.log(recSumTo(10));
