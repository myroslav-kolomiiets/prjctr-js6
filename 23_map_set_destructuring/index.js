'use strict';

/**
 * Сети, Мапи та деструктиризаційне присвоєння
 * @author Miroslav
 */

/**
 * Set
 */

// const uniqueIds = new Set();

// uniqueIds.add(123);
// uniqueIds.add(456);

// console.log('uniqueIds --> ', uniqueIds);

/**
 * Порівняння з масивом
 */

// const typicalArray = [];
// const typicaSet = new Set();

// function updateColections(array, set, value) {
// 	array.push(value);
//   	set.add(value);
//   console.log('updated array --> ', array);
//   console.log('updated set --> ', set);
// }

/**
 * Створення непорожнього сету
 */

// const filledSet = new Set([1,2,3,3,3,3,3,3, true, 'hello']);

// console.log(filledSet);

// filledSet.forEach(function(value) {
// 	console.log(value);
// });

// for (let value of filledSet) {
// 	console.log(value);
// }

/**
 * Специфіка роботи з непримітивними типами
 */

// const cheapShirt = { size: 'L', color: 'white' };
// // const fancyShirt = { size: 'L', color: 'white' };
// const fancyShirt = cheapShirt;

// console.log(cheapShirt === fanccheapShirtyShirt);

// const shirtsSet = new Set([cheapShirt, fancyShirt]);

// console.log(shirtsSet);

/**
 * Практичний приклад використання
 */

// const unUniqueArray = [1,2,3,4,5,6,7,7,6,6,2,5,1,6,0,12,56,23];
// const uniqueSet = new Set(unUniqueArray);
// console.log(uniqueSet);

/**
 * Map
 */

// const someData = new Map();

// someData.set('someKey', 'someValue');
// someData.set(true, 'some boolean stuff');
// someData.set(123, 'something with number');

// console.log(someData);

// const filledMap = new Map([['someKey', 666], [false, false], [{hasValue: true}, 'someText']]);

// console.log(filledMap

/**
 * Обхід
 */

// const filledMap = new Map([['someKey', 666], [1, false],  [1, true]]);

// for(let [key, value] of filledMap) {
// 	console.log(`${key} = ${value}`);
// }

// filledMap.forEach((value, key) => {
// 	console.log(`${key} = ${value}`);
// })

// console.log('filledMap --> ', filledMap);

// const dataObject = { position: 'left' };
// const sameObject = { position: 'left' };

// console.log(sameObject === dataObject);

// const map = new Map();
// map.set(dataObject, 'value for dataObject 123');

// console.log(map.get({ position: 'left' }));

// const numberArray = [10,20, 30];

// let a = numberArray[0];
// let b = numberArray[1];
// let c = numberArray[2];

// let [a, b, c = "too short"] = numberArray;

// console.log(a);
// console.log(b);
// console.log(c);

// let guest = 'Іван';
// let admin = 'Петро';

// [guest, admin] = [admin, guest];

// console.log('guest --> ', guest);
// console.log('admin --> ', admin);

// const donors = ['Іван', 'Петро', 'Василь'];

// const anotherDonors = ['Емма', 'Марта', [[['Василина'], 'Магдалина']]];

// const newArray = [...anotherDonors];

// console.log(newArray);

// const user = {
//     name: 'Ivan',
//     age: 28,
//     favoriteColor: 'blue'
// }

// const anotherUser = {
//     name: 'Yurij',
// }

// const { name: userName = 'Петро', age: userAge, favoriteColor } = user;
// console.log(userName);
// console.log(userAge);
// console.log(favoriteColor);

// const persona = {...anotherUser, nickName: 'superMan', ...user};

// console.log(persona);
