'use strict';

/**
 * Масиви в деталях
 * @author Miroslav
 */

/**
 * Створення масиву
 */

// const users = ["Igor", "Olga", "Petro", "Anna", "Nataly"];

// const testArr = new Array(10);
// console.log(testArr[3]);

/**
 * Перевірка чи є певна сутність масивом
 */

// console.log(Array.isArray(users));

/**
 * CRUD операції
 */

// create
// const users = ["Igor", "Olga", "Petro", "Anna", "Nataly"];
// console.log(users);

// read
// const user = users[2];
// console.log(user);

// update
// users[1] = "Ivanka";
// console.log(users);

// delete
// delete users[2];
// console.log(users);

/**
 * length
 */

// length
// const users = ["Igor", "Olga", "Petro", "Anna"];

// console.log(users[users.length - 1]);

// console.log(users.at(0));

/**
 * методи масивів
 */

// const users = ["Igor", "Olga", "Petro", "Anna"];

// додати в кінець
// users.push('Ivan');
// console.log(users);

// видалити останній
// users.pop();
// console.log(users);

// додати в початок
// users.unshift('Ivan');
// console.log(users);

// видалити з початку
// users.shift();
// console.log(users);

/**
 * видалення елементів де завгодно через splice
 */

// const users = ["Igor", "Olga", "Petro", "Anna", "Ivanka"];

// const deletedUsers = users.splice(2, 1, "John");
// console.log(deletedUsers);
// console.log(users);

// users.splice(2, 1, 'Replace by');
// console.log('users --> ', users);
// console.log('deletedUsers --> ', deletedUsers);

/**
 * Задача №1
 * Що буде в масиві users?
 */

// const users = ["Igor", "Olga", "Petro", "Anna"];
// const copyOfUsers = users;

// copyOfUsers.push('Ivan');

// console.log(users);

/**
 * зріз-копія масиву через slice
 */

// const users = ["Igor", "Olga", "Petro", "Anna"];

// const specialUsers = users.slice();
// specialUsers[3] = 'Ivan'

// console.log('users --> ', users);
// console.log('specialUsers --> ', specialUsers);

/**
 * перебір масиву
 */

// const users = ["Igor", "Olga", "Petro", "Anna", false, 100, ['test', 10]];

// for(let index = 0; index < users.length; index++) {
// 	console.log(users[index]);
// }

// for (let user of users) {
// 	console.log(user);
// }

// users.forEach(
// 	(user, index) => {
// 		console.log(user + '!')
// 		console.log('my number is - ', parseInt(index, 10)+1)
// 	}
// )

/**
 * конкатенація масивів
 */

// const users = ["Igor", "Olga", "Petro", "Anna"];
// const specialUsers = ["Ivan", "Pavlo"];
//
// const superUsers = users.concat(specialUsers);
//
// console.log('users --> ', users);
// console.log('superusers --> ', superUsers);

// const users = ["Igor", "Olga", "Petro", "Anna"];

/**
 * перетворення масивів через map
 */

// const users = ["Igor", "Olga", "Petro", "Anna"];
//
// const updatedUsers = users.map((name) => {
// 	return name.toLowerCase();
// });
//
// console.log('users --> ', users);
// console.log('updatedUsers --> ', updatedUsers);

/**
 * сортування масивів через sort
 */

// const numbers = [10, -5 , 16, 24];
//
// numbers.sort();
//
// numbers.sort((a, b) => {
// 	if (a < b) {
// 		return 1;
// 	} else if ( a === b) {
// 		return 0;
// 	} else if( a > b) {
// 		return -1;
// 	}
// });
//
// console.log('sorted numbers --> ', numbers);

/**
 * розвертання масивів через reverse
 */

// const users = ["Igor", "Olga", "Petro", "Anna", "Olga"];

// const copiedUsers = users.slice();
// const reversedUsers = copiedUsers.reverse();

// console.log('users --> ', users);
// console.log('reversedUsers --> ', reversedUsers);

/**
 * розвертання масивів в рядок і назад
 */

// let userData = ["Koval", "Ivan", "Petrovych"];
//
// const userDataString = userData.join(' ');
// const userDataArr = userDataString.split('', 5);
//
// console.log(userDataString);
// console.log(userDataArr);

/**
 * пошук в масиві
 */

// const users = ["Igor", "Olga", "Petro", "Anna", "Olga"];

// const hasNameIvan = users.includes("Ivan");

// console.log('hasNameIvan --> ', hasNameIvan);

// const indexOfNameOlga = users.lastIndexOf("Olga");

// console.log('indexOfNameOlga --> ', indexOfNameOlga);

/**
 * find
 */

// const numberValues = [10, -5 , 16, 24, 100, -12, 7];
//
// const foundNumber = numberValues.find((number) => {
// 	return number === 100;
// });
//
// console.log('foundNumber --> ', foundNumber);

/**
 * filter
 */

// const numberValues = [10, -5 , 16, 24, 100, -12, 7];

// const filteredNumbers = numberValues.filter((number) => {
// 	return number > 20;
// });

// console.log('filteredNumbers --> ', filteredNumbers);

/**
 * flat
 */

// const matrix = [
// 	[24, 45, 56],
// 	[12, 56, [90]],
// 	[89, 41, 73]
// ];
//
// const flatMatrix = matrix.flat(Infinity);
// console.log('flatMatrix --> ', flatMatrix);

/**
 * reduce
 */

// const numberValues = [10, -5 , 16, 24, 100, -12, 7];
//
// const initValue = 0;
//
// const sumOfValues = numberValues.reduce(
// 	(prev, current) => {
// 		return prev + current;
// 	},
// 	initValue
// )
//
// console.log(sumOfValues);

/**
 * Задача №2
 * Який буде результат приведення типів?
 */

// const arr1 = [1,2,3,4];
// const arr2 = [1,2,3,4];

// console.log([] + null + 1);
// console.log(['text'] + null + 1);
// console.log([10, 11, 12] + null + 1);
// console.log([1,2,3] === [1,2,3]);
// console.log([1,2,3] == [1,2,3]);
// console.log([] && false);
// console.log([] || false);
// console.log(['test1'] + ['test2']);


/**
 * деструктуризація
 */

// const users = ["Igor", "Olga", "Petro", "Anna", "Olga"];

// const user1 = users[0];
// const user2 = users[1];
// const user3 = users[2];

// let [user1, user2, user3] = users;

// console.log(user1)
// console.log(user2)
// console.log(user3)
