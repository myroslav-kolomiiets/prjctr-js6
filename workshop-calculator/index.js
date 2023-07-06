"use strict";

const input = document.querySelector('.input');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const result = document.querySelector('.result');

let resultDisplayed = false;

/**
 * Перевірка на математичний оператор
 * @param {String} char - елемент для перевірки
 */
const checkIfOperator = char => char === '+' || char === '-' || char === '×' || char === '÷';

/**
 * Обробник події кліку по кнопках з математичними операторами
 * @param {Event} event - The triggering event
 */
const operatorButtonHandler = (event) => {
    // отримуємо доступ до введеної операції
    const currentString = input.innerHTML;
    // отримуємо доступ до останнього введеного значення в операції
    const lastChar = currentString[currentString.length - 1];
    // якщо користувач вже ввів математичний символ останнім значенням
    if (checkIfOperator(lastChar)) {
        // то ми його замінюємо
        input.innerHTML = currentString.substring(0, currentString.length - 1) + event.target.innerHTML;
    } else if (currentString.length === 0) {
        // якщо користувач нічого не ввів - нічого не робимо
        return null;
    } else {
        // у всіх інших випадках додаємо оператор до кінця рядка
        input.innerHTML += event.target.innerHTML;
    }
}

/**
 * Обробник події кліку по кнопках з цифрами
 * @param {Event} event - The triggering event
 */
const numberButtonHandler = (event) => {
    // отримуємо доступ до введеної операції
    const currentString = input.innerHTML;
    // отримаємо доступ до останнього введеного значення в операції
    const lastChar = currentString[currentString.length - 1];
    // якщо користувач вводить число, то ми додаємо його до введеної операції
    if (resultDisplayed === false) {
        input.innerHTML += event.target.innerHTML;
    } else if (resultDisplayed === true && checkIfOperator(lastChar)) {
        // якщо користувач вводить число коли вже виведений результат попередньої операції і останній символ є оператором:
        // ставимо позначку що це вже не результат попередньої введеної операції
        resultDisplayed = false;
        // а введене число додаємо до введеної операції
        input.innerHTML += event.target.innerHTML;
    } else {
        // якщо користувач вводить число коли відображається результат попередньої операції
        // ставимо позначку що це вже не результат попередньої введеної операції
        resultDisplayed = false;
        // очищуємо значення в інпуті
        input.innerHTML = event.target.innerHTML;
    }
}

const getResult = () => {
    // отримуємо доступ до вмісту інпута
    const inputString = input.innerHTML
        .replace('×', '*')
        .replace('÷', '/');

    // отримуємо доступ до останнього введеного значення в операції
    const lastChar = inputString[inputString.length - 1];
    // якщо користувач останнім символом ввів оператор і натискає на отримання результату
    if (checkIfOperator(lastChar)) {
        // нічого не робимо
        return null;
    }

    const convertStringOfNumbersAndOperatorsToFunctionObject = () => new Function(`return ${inputString}`);

    input.innerHTML = convertStringOfNumbersAndOperatorsToFunctionObject()();
    resultDisplayed = true;
}

/**
 * Обробка подій для всіх кнопок з математичними операторами
 */
operators.forEach(operator => operator.addEventListener('click', operatorButtonHandler));

/**
 * Обробка подій для всіх кнопок з цифрами
 */
numbers.forEach(number => number.addEventListener('click', numberButtonHandler));

/**
 * Очищення введених даних
 */
clear.addEventListener('click', () => input.innerHTML = '');

/**
 * Виведення результату
 */
result.addEventListener('click', getResult);
