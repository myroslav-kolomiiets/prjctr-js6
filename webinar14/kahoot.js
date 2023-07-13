/**
 * Задача 1
 * @return {IArguments}
 */

const getArgs = () => arguments;

console.log(getArgs(10));

/**
 * Задача 2
 * @param rest
 * @return {*[]}
 */

const getArgs2 = (...rest) => rest;

console.log(getArgs2(10));

/**
 * Задача 3
 */

const getArgs3 = function (){
    [...arguments].forEach((argument) => argument + 2);
};

console.log(getArgs3(10));

/**
 * Задача 4
 */

const getArgs4 = function (){
    return [...arguments].forEach((argument) => argument + 2);
};

console.log(getArgs4(10));

/**
 * Задача 5
 * @return {unknown[]}
 */

const getArgs5 = function (){
    return [...arguments].map((argument) => argument + 2);
};

console.log(getArgs5(10));

/**
 * Задача 6
 * @return {boolean}
 */

const getArgs6 = function (){
    return [...arguments].map((argument) => argument) === [...arguments];
};

console.log(getArgs6(10));

