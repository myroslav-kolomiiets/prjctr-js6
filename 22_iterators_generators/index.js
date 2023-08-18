'use strict';

/**
 * Ітератори та генератори
 * @author Miroslav
 */

// const someTestData = [
//     'Еней',
//     'був',
//     'парубок',
//     'моторний',
//     'і',
//     'хлопець',
//     'хоч',
//     'куди',
//     'козак'];
//
// function makeIterator(array) {
//     let nextIndex = 0;
//
//     return {
//         next: function () {
//             if (nextIndex < array.length) {
//                 const result = {value: array[nextIndex], done: false};
//                 nextIndex++
//                 return result;
//             } else {
//                 return {done: true};
//             }
//         }
//     }
// }
//
// let iterator = makeIterator(someTestData);
//
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

/**
 * for..of
 */

// const array = ['a', 'b', 'c', 'd'];
// console.log(array)
// for (let value of array) {
// 	console.log('--> ', value);
// }

/**
 * Приклад перетворення об'єкта в ітерабельний
 */

// const user = {
//    name: 'Diego',
//    age: 27,
//    gender: 'male',
//    interests: ['hiking', 'gaming'],
// }
// console.log(user)

// user[Symbol.iterator] = function() {
// 	const properties = Object.keys(this);
//
// 	let count = 0;
//
// 	return{
// 		next() {
// 			if (count < properties.length) {
// 				const key = properties[count];
// 				let result = { done: false, value: user[key]};
// 				count++;
// 				return result;
// 			} else {
// 				return {done: true};
// 			}
// 		}
// 	}
// }

// for (let x of user) {
// 	console.log(x);
// }

/**
 * Практичний приклад використання
 */

// const limitation = {
// 	from: 3,
// 	to: 9
// }

// function limitationIterator(limitationObj) {
// 	let current = limitationObj.from;
//
// 	return {
// 		next: function() {
// 			return current <= limitationObj.to ? {value: current++, done: false} : {done: true}
// 		}
// 	}
// }

// const numberCount = limitationIterator(limitation);

// console.log(numberCount.next().value);
// console.log(numberCount.next().value);
// console.log(numberCount.next().value);
// console.log(numberCount.next().value);
// console.log(numberCount.next().value);
// console.log(numberCount.next().value);
// console.log(numberCount.next().value);
// console.log(numberCount.next().value);

/**
 * Вбудовані ітератори
 */

// const numbers = [1,2,3,4,5,6,7,8,9];

// const iterator = numbers[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

/**
 * Неявна ітерація в деструктуризації
 */

// const [valueA, valueB] = [10, 20, 30];

// const valueA = [10, 20, 30][0];
// const valueB = [10, 20, 30][1];

// console.log(valueA);
// console.log(valueB);

// const arr = Array.from('Джон');
// console.log(arr);

// const arr = [...'Доу'];
// console.log(arr);

/**
 * Генератори
 */

// function* sayNames() {
// 	yield 'Матвій';
// 	yield 'Марта';
// 	yield 'Олекса';
// 	yield 'Емма';
// 	yield 'Іван';
// 	yield 'Сергій';
// 	return 'Микола';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// for(let value of name) {
// 	console.log(value);
// }

/**
 * Приклад практичного використання
 */

// function* generateID(limit) {
// 	let index = 1;
//
// 	while(index <= limit) {
// 		yield index++;
// 	}
// }
//
// const gen = generateID(42);
//
// for (let value of gen) {
// 	console.log(value);
// }

/**
 * Приклад реалізації limitation через генератор
 */

// function* limitationGenerator(start, end) {
// 	for(let i = start; i <= end; i++) {
// 		yield i;
// 	}
// }
//
// const numberCount = limitationGenerator(1, 15);
//
// for (let value of numberCount) {
// 	console.log(value);
// }
