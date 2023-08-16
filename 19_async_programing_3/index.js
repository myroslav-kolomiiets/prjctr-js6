'use strict';

/**
 * Асинхронне програмування (3)
 * @author Miroslav
 */

/**
 * Помилки і як їх створювати
 */

// const commonError = new Error('Якась загальна помилка. Перевірте код')
//
// console.log(commonError.message) // 'Якась загальна помилка. Перевірте код'
//
// console.log(commonError.name) // 'Error'

/**
 * Приклад синтаксичної помилки
 */

// console.log(;) // SyntaxError: Unexpected token ';'

// console.log(() // SyntaxError: missing ) after argument list

/**
 * Приклад ReferenceError
 */

// console.log(name) // ReferenceError: name is not defined

/**
 * Приклад помилки по типу
 */

// console.log(null.length)

/**
 * Приклад помилки по діапазону
 */

// new Array(100000000000) // RangeError: Invalid array length

/**
 * Приклад URI помилки
 */

// decodeURIComponent('%') // URIError: URI malformed

/**
 * Створення власних класів помилок
 */

// class WrongDataTypeForSumError extends Error {
//    constructor(message) {
//      super(message)
//      this.name = 'WrongDataTypeForSumError'
//    }
// }

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new WrongDataTypeForSumError('Невалідний тип даних для знаходження суми')
//   }
//
//   return a + b;
// }

// sum(1, `2`);

/**
 * try...catch
 */

// try {
//   someFunction();
//   anotherFunction();
// } catch (err) {
//   console.log('Піймався розбійнику! ', err.message);
//   console.log('10 год тюрми!');
// }

// try {
//   const six = 6;
//   console.log(six);
//
//   six = 7; // помилка!
//
// // з цього місця управління переходить до catch
//
//   const nine = 9; // не виконається
//   console.log(six + nine); // і це теж
// } catch (err) {
//   console.log('Піймався розбійнику!');  // обробляємо помилку
//   console.log('10 год тюрми!');
// }
//
// console.log('Що ж, можна і продовжити'); // 4. Буде виконуватись далі

/**
 * try...catch...finally
 */

// try {
//   webSocket.connect('ws://....');
//   callMayThrowError();
// } catch (err) {
//   doSomeWithError(err);
// } finally {
// 	webSocket.disconnect('ws://....');
// }

/**
 * Обробка помилок в catch
 */

// parse-module.js

// 	// Є свій кастомний тип помилки
// 	class ParsingError extends Error {
// 	  ...
// 	}

// 	function parse(data) {
// 	  	try {
// 	    	parseData(data)
// 	  	} catch (err) {
// 		    if (err.name !== 'ParsingError') {
// 		      // інший тип помилки прокидуємо далі
// 		      throw err
// 		    }

// 		    logError(err)
// 		}
// 	}

// 	export default parse;

// // це інший файл

// import parse from 'parse-module'

// try {
//   parse(data)
// } catch (e) {
//   console.log('Невідома помилка парсингу:', e)
// }

/**
 * try...catch та асинхронний код
 */

// try {
//   // Код здійсниться коректно, бо звідси повернувся проміс
//   Promise.reject('err')
// } catch (err) {
//   // помилка не спіймається
//   console.log('Піймався розбійнику! ', err);
// }

// try {
//   // Код здійсниться коректно, бо таймаут встановився без помилок
//   setTimeout(() => {
//     throw Error('10 год тюрми');
//   }, 5000);
// } catch (err) {
//   // помилка з таймауту не спіймається
//   console.log('Піймався розбійнику! ', err);
// }

/**
 * Через async/await
 */

// async function handlePromise() {
//   try {
//     // проміс повернувся з помилкою
//     await Promise.reject('err');
//   } catch (err) {
//     // помилка спіймається
//     console.log('Піймався розбійнику! ', err);
//   }
// }

// handlePromise();

// function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function timeout(fn, ms) {
//   try {
//     // чекаємо таймаут
//     await wait(ms);

//     // і виконуємо функцію
//     fn();
//   } catch (err) {
//     // Ловимо помилку
//     console.log('Піймався розбійнику! ', err);
//   }
// }

// timeout(() => {
//   throw Error('10 год тюрми');
// }, 5000)

/**
 * async/await
 */

// async function getStarWarsMovies() {
//   return 1;
// }

// console.log(getStarWarsMovies());

// console.log('ololo');

// async function getStarWarsMovies(id) {
// 	const response = await fetch(`https://swapi.dev/api/films/${id}`);
// 	console.log('отримали відповідь від ендпоїнту - ', response);
// 	return response.json();
// }
//
// const movies = getStarWarsMovies(1).then((movie) => {
// 	console.log(movie.title);
// 	console.log(movie.characters);
// })

/**
 * Приклад на промісах і на async/await
 */

// function getMainActorProfileFromMovie(id) {
//   return fetch(`https://swapi.dev/api/films/${id}/`)
//     .then((movieResponse) => {
//       return movieResponse.json();
//     })
//     .then((movie) => {
//       const characterUrl = movie.characters[0].split("//")[1];
//       return fetch(`https://${characterUrl}`);
//     })
//     .then((characterResponse) => {
//       return characterResponse.json();
//     })
//     .catch((err) => {
//       console.error("Помилка - ", err);
//     })
// }

// async function getMainActorProfileFromMovie(id) {
//   try {
//     const movieResponse = await fetch(`https://swapi.dev/api/films/${id}/`);
//     const movie = await movieResponse.json();
// 	console.log(movie)
//     const characterUrl = movie.characters[0].split('//')[1];
//     const characterResponse = await fetch(`https://${characterUrl}`);
//     return characterResponse.json();
//   } catch (err) {
//     console.error('Помилка - ', err);
//   }
// }

// getMainActorProfileFromMovie(1).then((profile) => {
//   console.log(profile);
// })

/**
 * Комбінування
 */

// async function getUser(){
//   // повертає інформацію про користувача
// }
//
// async function getNews(){
//   // повертає список новин
// }
//
// // const user = await getUser();
// // const news = await getNews();
//
// const [user, news] = await Promise.all([
//   getUser(),
//   getNews()
// ])
