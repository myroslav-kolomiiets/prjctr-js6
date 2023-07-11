'use strict';
/**
 * Елементи необхідні в коді
 */
const buttonCup0 = document.getElementById('cup0');
const buttonCup1 = document.getElementById('cup1');
const buttonCup2 = document.getElementById('cup2');
const playButton = document.getElementById('play-button');
const ball = document.getElementById('thimble-ball');

/**
 * Деякі змінні які будуть нам потрібні для використання у функціях
 */
let winning;
let shuffleCounter = 0;
let intervalId;

/**
 * Функція яка запускає гру
 */
function startGame() {
    // показуємо де наш м'ячик
    showBall();
    // запускаємо анімацію переміщення стаканчиків
    setTimeout(shuffling, 1000);
}

/**
 * Функція що показую м'ячик
 */
function showBall() {
    // заблокувати натискання на кнопку
    playButton.disabled = true;
    // визначаймо випадкове початкове положення
    winning = getRandomNumber();
    // визначаємо відповідний стаканчик
    const thimb = document.getElementById(`cup${winning}`);
    // поставимо м'ячик у відповідне місце
    ball.setAttribute('Class', `thimble-ball-position${winning}`);
    // показуємо місцезнаходження м'ячика під вказаним стаканчиком
    thimb.classList.add('thimble-up');

    setTimeout(function() {
        thimb.classList.remove('thimble-up');
    }, 500);

    setTimeout(function() {
        ball.classList.remove(`thimble-ball-position${winning}`);
    }, 1000);
}

/**
 * Допоміжна функція для визначення випадкового індексу
 */
const getRandomNumber = () => Math.floor(Math.random() * 3);

/**
 * Функція яка з певним тактом перемішує стаканчики
 */
function shuffling() {
    intervalId = setInterval(pickRandomCups, 500);
}

/**
 * Функція перемішування стаканчиків
 */
function pickRandomCups() {
    // Визначаємо два випадкових індекса для стаканчиків
    const cupOne = getRandomNumber();
    const cupTwo = getRandomNumber();

    // коли індекси різні - запускаємо логіку зміни їх положення
    if (cupOne !== cupTwo) {
        // визначили випадкові наперстки
        const cupOneElement = document.getElementById(`cup${cupOne}`);
        const cupTwoElement = document.getElementById(`cup${cupTwo}`);

        // отримуємо доступ до їх класів
        const cupOneClass = cupOneElement.getAttribute('class');
        const cupTwoClass = cupTwoElement.getAttribute('class');

        // міняємо місцями їхні класи - таким чином запуститься анімація з css-класів яка відповідає за transition
        cupOneElement.setAttribute('Class', cupTwoClass);
        cupTwoElement.setAttribute('Class', cupOneClass);

        // перевіряємо чи був один з цих стаканчиків з м'ячиком
        if ([cupOne, cupTwo].includes(winning)) {
            winning = cupOne === winning ? cupTwo : cupOne;
        }

        // оновлюємо лічильник
        shuffleCounter++;

        // по досягненню певної кількості ітерацій - зупиняємо виконання функції
        if (shuffleCounter > 5) {
            clearInterval(intervalId);
            shuffleCounter = 0;
            // розблоковуємо наперстки
            removeDisabled();
        }
    } else {
        // коли індекси однакові - перезапускаємо функцію
        pickRandomCups();
    }
}

/**
 * Функція яка блокує доступ до всіх стаканчиків
 */
function addDisabled() {
    const add = document.getElementsByClassName('sewing-thimble');
    for (let i = 0; i < add.length; i++) {
        add[i].setAttribute('disabled', 'disabled');
    }
}

/**
 * Функція яка повертає доступ до всіх стаканчиків
 */
function removeDisabled() {
    const removed = document.getElementsByClassName('sewing-thimble');
    for (let i = 0; i < removed.length; i++) {
        removed[i].removeAttribute('disabled');
    }
}

/**
 * Функція відкривання стаканчика
 */
function selectCup(event) {
    const id = event.target.id;
    console.log(event)
    // блокуємо кліки по всіх стаканчиках
    addDisabled();
    // знаходимо стаканчик по якому клікнув користувач
    const selectedCup = document.getElementById(id);
    // знаходимо стаканчик під яким знаходиться м'ячик
    const winningCup = document.getElementById(`cup${winning}`);
    // ставимо його під стаканчик де він має знаходитись
    ball.setAttribute('Class', `thimble-ball-position${winning}`);
    // підіймаємо натиснутий користувачем стаканчик
    selectedCup.classList.add('thimble-up');

    setTimeout(function() {
        selectedCup.classList.remove('thimble-up');
        winningCup.classList.remove('thimble-up');
        playButton.disabled = false;
        resetThimbClass();
    }, 500)
}

/**
 * Функція яка повертає наперстки у стартове положення
 */
function resetThimbClass() {
    buttonCup0.setAttribute('Class', 'sewing-thimble thimble0');
    buttonCup1.setAttribute('Class', 'sewing-thimble thimble1');
    buttonCup2.setAttribute('Class', 'sewing-thimble thimble2');
}

/**
 * Слухачі подій на елементах інтерфейсу
 */
buttonCup0.addEventListener('click', selectCup);
buttonCup1.addEventListener('click', selectCup);
buttonCup2.addEventListener('click', selectCup);
playButton.addEventListener('click', startGame);
