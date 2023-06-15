'use strict';

/**
 * Просунута робота з функціями 1
 * @author Miroslav
 */

/**
 * Рекурсія vs ітерація
 * Про контекст виконання на приклад рекурсії та ітерації
 */

// ітеративна сума

// function iterativeSum(x) {
// 	console.log('iterativeSum x - ', x);
//   	let result = 0;
// 	for (let i = 0; i <= x; i++) {
// 		result += i;
// 	}
// 	return result;
// }
// console.log(iterativeSum(5));

// рекурсивна сума

// function recursiveSum(x) {
// 	console.log('recursiveSum x --> ', x);
// 	if (x === 1) {
// 		return x;
// 	}
// 	return x+recursiveSum(x-1);
// }
// console.log(recursiveSum(5));

/**
 * Spread syntax (...), залишкові параметри та оператор розширення
 */

// function simpleSum(a, b, ...args) {
//   console.log('args - ', args);
//   let sum = a + b;
//   for (let arg of args) {
//   	sum += arg;
//   }
//   return sum;
// }
// console.log(simpleSum(1,2,3,4,12,23));

// const images1 = [
//     {
//         id: 1,
//         url: 'https//example.com'
//     },
//     {
//         id: 2,
//         url: 'https//example.com'
//     }
// ];
//
// const images2 = [
//     {
//         id: 3,
//         url: 'https//example.com'
//     },
//     {
//         id: 4,
//         url: 'https//example.com'
//     }
// ];

// const result = [...images1, ...images2];

// console.log(result);

// const imagesObj1 = {
//     id: 3,
//     url: 'https//example.com',
// };
//
// const imagesObj2 = {
//     id2: 4,
//     url2: 'https//example.com',
//     ...imagesObj1
// }
//
// console.log(imagesObj2);

// const str = 'some';
// console.log([...str]);

/**
 * Замикання
 * та перша задача: що виведе "console.log"?
 */

// let price1 = 1;
//
// function simpleSum(a) {
// 	let innerPrice = 2;
//   	return a + innerPrice;
// }
// price1 = 3;
// let innerPrice = 20;
// console.log(simpleSum(price1));

/**
 * Друга задача: що виведе "console.log"?
 */

// function makeWorker() {
//   let name = "Петро";
//   return function() {
//     console.log(name);
//   };
// }
// let name = "Іван";
// // create a function
// let work = makeWorker();
// // call it
// work();

/**
 * Створення декількох лічильників
 * та третя задача: що виведуть три "console.log" нижче?
 */

// function makeCounter() {
// 	let count = 0;
//
// 	return function() {
// 		return ++count;
// 	};
// }
//
// let counter = makeCounter();
//
// console.log(counter());
// console.log(counter());
// console.log(counter());

/**
 * Додаткове питання по counter, чи можна ззовні змінити значення count?
 */

/**
 * Додаткове питання два, по counter, що виведуть три "console.log" нижче?
 */

// let counter2 = makeCounter();
//
// console.log( counter2() );
// console.log( counter2() );
// console.log( counter2() );

/**
 * IIFE (вже частина історії)
 */

// (function() {
// 	console.log('Hi')
// })();

/**
 * Глобальний об'єкт
 */

// globalThis.data = {
// 	sayHy: 'Hy!',
// }
//
// console.log(globalThis.data.sayHy);

/**
 * Об'єкт функції
 */

// function add(a, b, c) {
// 	return a + b + c;
// }

// console.log(add.name);

// console.log(add.length);

// function sayHi() {
// 	sayHi.callingCounter++;
// }
//
// sayHi.callingCounter = 0;
//
// sayHi();
// sayHi();
// sayHi();
//
// console.log('sayHi.callingCounter -- ', sayHi.callingCounter);

/**
 * Особливості new Function
 */

// const add = new Function('a', 'b', 'return a + b');

// console.log(add(1, 2));
