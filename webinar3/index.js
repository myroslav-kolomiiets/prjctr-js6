'use strict';

/**
 * Примітивні типи даних в деталях
 * @author Miroslav
 */

/**
 * Перетворення чисел
 */

// let resultByNumber = Number('12');
// let resultByParseInt = parseInt('120px', 10);
// let resultByParseFloat = parseFloat('12px');
// let resultByPlus = +'12';

// console.log('resultByNumber --> ', resultByNumber);
// console.log('resultByParseInt --> ', resultByParseInt);
// console.log('resultByParseFloat --> ', resultByParseFloat);
// console.log('resultByPlus --> ', resultByPlus);

/**
 * Перетворення рядків
 */

// let value = 12;

// let resultByToString = value.toString();
// let resultByString = String(value);
// let resultByEmptyString = value+'';

// console.log('resultByToString --> ', resultByToString);
// console.log('resultByString --> ', resultByString);
// console.log('resultByEmptyString --> ', resultByEmptyString);

// конкатенація

// console.log(12 + 12); //24
// console.log('12' + 12); //1212
// console.log('12' + '12'); //1212

/**
 * Перетворення в булеве значення
 */

// let resultByBoolean = Boolean('');
// let resultByTwo = !!0;
//
// console.log('resultByBoolean --> ', resultByBoolean);
// console.log('resultByTwo --> ', resultByTwo);

/**
 * Перетворення в bigint
 */

// let resultByBigInt = BigInt(true);
//
// console.log('resultByBigInt --> ', resultByBigInt);

/**
 * Перетворення в математичних операціях
 */

// console.log('math result -->', true + 10);
// console.log('math result -->', undefined + 10);
// console.log('math result -->', undefined + '10');
// console.log('math result -->', false + 10);
// console.log('math result -->', false + 10 + 'text');
// console.log('math result -->', true + 10 + null);
// console.log('math result -->', true + 10 + 'text' + null);

// bigint тільки з bigint
// console.log(12n + 12n);
// console.log('text' + 12n);

/**
 * Перетворення в логічних операціях
 */

// оператор АБО та присвоєння
// let result = false || 'some text' || '';
// console.log('result --> ', result);

// let name = 'Mykhailo';
// let userName = name || 'unknown user';
// console.log('userName --> ', userName);

// оператор І та присвоєння
// let result = 'some text' && 0;
// console.log('result --> ', result);

// як це на практиці
// let showUserName = false;
// let userName = 'Oleg';
// let userNameForRendering = showUserName && userName || 'Unknown user';
// console.log('userNameForRendering --> ', userNameForRendering);

/**
 * Перетворення number в різні системи числення
 */

// let number = 12..toString(2);
// console.log('number --> ', number);

/**
 * Витягування числових значень з string
 */

// let parsedNumber = parseInt('400px', 10);
// console.log('parsedNumber --> ', parsedNumber);

// let parsedNumber = parseFloat('400.52px', 10);
// console.log('parsedNumber --> ', parsedNumber);

/**
 * Приклад роботи з вбудованим об'єктом Math
 */

// let someRandomResult = Math.random(); // 0...1
// console.log('someRandomResult --> ', someRandomResult);

// let someResult = Math.trunc(13.99);
// console.log('someResult --> ', someResult);

// console.log(1.1 + 1.3); //2.4000000000000004

/**
 * Що ми можемо робити з string
 */

// const innerText = 'Some inner text';
// let text = `Hello Darkness My Old ${innerText} Friend`;
// let text = 'Hello Darkness My Old ' + innerText + ' Friend';

// console.log(text);

// let text = 'Пам\'ятай про такий символ як.';
// console.log(text.length);

// let text = 'female';
// console.log(text.charAt(0));

// let text = 'Пам\'ятай про книгу \'Кобзар\'';
// console.log(text.toUpperCase());

// let text = 'Пам\'ятай про книгу \'Кобзар\'';
// console.log(text.indexOf('книгу'))

// let text = 'Пам\'ятай про книгу \'Кобзар\' книгу';
// let query = 'Пам\'ятай';
// console.log(text.startsWith(query));

// let text = 'Пам\'ятай про книгу \'Кобзар\' книгу';
// let query = 'Пам\'ятай';
// console.log(text.includes(query));

// let text = 'Пам\'ятай про книгу \'Кобзар\'';
// let substring = text.slice(10, 15);
// console.log(substring);

// let text = 'Пам\'ятай про книгу \'Кобзар\' книгу';
// let query = '    Пам\'ятай  ';
// console.log(query.trim());
