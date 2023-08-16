'use strict';

/**
 * Об'єкти в деталях
 * @author Miroslav
 */

let id = Symbol("unique person id");
// let anotherId = Symbol("unique person id");
// console.log(id === anotherId);

const person = {
    name: 'Anton',
    age: 56,
    mainRole: 'admin',
    isOnline: false,
    roles: ["user", "support", "admin"],
    sayHi: () => {console.log("Hello there!")},
    params: {
        height: 175,
        weight: 85,
    },
    [id]: 666,
};

// const personClone = person;
// personClone.name = "Anna";
// console.log(person);

// person.id = 555;
// console.log(person);

// let someKey = 'mainRole';

// console.log(person['mainRole'])

/**
 * CRUD операції
 */

// create
// const initObject = {name: 'someName'};
// const secondObject = new Object({})

// read
// console.log(initObject)
// console.log(secondObject)
// console.log(person);

// const key = 'isOnline';
// console.log(person[key]);

// update
// person.name = "Anna";
// console.log(person);

// delete
// delete person.name;
// console.log(person);

/**
 * Перевірка існування ключів
 */

// let isThereSomeHeight = 'height' in person.params;

// console.log(isThereSomeHeight);

/**
 * Робота з циклом
 */

// for (let key in person) {
// 	console.log(key);
// }

/**
 * Опційний ланцюжок
 */

// const personKey = person?.params?.color || "some default";
// console.log(personKey);

/**
 * Object.keys, Object.values
 */

// console.log(Object.keys(person));

// console.log(Object.values(person));

/**
 * Object.entries, Object.fromEntries
 */

// console.log(Object.entries(person));

// let capsPerson = Object.fromEntries(
//   Object.entries(person).map(([key, value]) => [key.toUpperCase(), value])
// );

// console.log(capsPerson);

// capsPerson.SAYHI();

/**
 * Примітивний тип символ
 */

// console.log(person.id);
// console.log(person[id]);

/**
 * Про що варто пам'ятати?
 */

/**
 * null теж об'єкт
 */

// console.log(typeof null);
//
// if (
// 	typeof person === 'object' &&
// 	person !== null &&
// 	!Array.isArray(person)
// ) {
// 	console.log('its object');
// }

/**
 * Копіювання об'єктів через Object.assign (для першого рівня)
 */

// const personClone = Object.assign({}, person);

// console.log(personClone);

/**
 * Глибоке копіювання об'єктів
 */

// let anotherPerson = JSON.parse(JSON.stringify(person));

// anotherPerson.name = 'Oleg';

// anotherPerson.params.height = 180;

// console.log(person);
// console.log(anotherPerson);

/**
 * Як зробити об'єкт незмінним
 */

// Object.freeze(person);

// person.name = 'Nataly';

// console.log(person);

/**
 * Вбудований об'єкт Date
 */

// let someDate = new Date("2022-01-10");

// console.log(someDate);

// let start = performance.now();

// for (let i = 0; i < 1000000000; i++) {
// 	++person[id]
// }

// let end = performance.now();

// console.log(person[id]);
// console.log('time: ', end - start);

// console.log(Date.parse('03 Aug 1985'));
