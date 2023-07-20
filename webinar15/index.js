'use strict';

/**
 * ООП в JS (2)
 * @author Miroslav
 */

/**
 * Розширення Array для простого перемішування масиву
 */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.shuffle = function () {
//     return this.sort(function () {
//         return Math.round(Math.random() * 2) - 1;
//     });
// };

// console.log(numbers.shuffle());

// const decNumbers = Array(10, 20, 30, 40, 50, 60, 70, 80, 90);

// console.log(decNumbers.shuffle());

/**
 * Експеримент 1
 */
// numbers.hello = () => "hello";

// console.log(numbers.hello());

// console.log(decNumbers.hello());

/**
 * Експеримент 2
 * класова реалізація
 */
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
//   getFullName() {
//     return this.firstName + ' ' + this.lastName
//   }
// }
//
// class User extends Person {
//   constructor(firstName, lastName, email, password) {
//     super(firstName, lastName)
//     this.email = email
//     this.password = password
//    }
//    getEmail() {
//      return this.email
//    }
//    getPassword() {
//      return this.password
//    }
// }
//
// let user1 = new User('John','Cena','john@cena.com', 'iLuvWWE');
//
// console.log(user1.getEmail());
// console.log(user1);

/**
 * Експеримент 2
 * прототипна реалізація
 */
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
//
// Person.prototype.getFullName = function () {
//     return this.firstName + ' ' + this.lastName;
// }
//
// function User(firstName, lastName, email, password) {
//     // call super constructor:
//     Person.call(this, firstName, lastName);
//     this.email = email;
//     this.password = password;
// }
//
// User.prototype = Object.create(Person.prototype);
// User.prototype.setEmail = function (email) {
//     this.email = email;
// }
// User.prototype.getEmail = function () {
//     return this.email;
// }
//
// let user2 = new User('John', 'Cena', 'john@cena.com', 'iLuvWWE');
//
// console.log(user2.getFullName());

/**
 * SOLID
 * Приклад 'S'
 */
class TodoList {
    constructor() {
        this.items = []
    }

    addItem(text) {
        this.items.push(text)
    }

    removeItem(index) {
        this.items = items.splice(index, 1)
    }

    toString() {
        return this.items.toString()
    }
}

class DatabaseManager {
    saveToFile(data, filename) {
        fs.writeFileSync(filename, data.toString());
    }

    loadFromFile(filename) {
        // якась логіка
    }
}

/**
 * SOLID
 * Приклад 'O'
 */
// class Coder {
//     constructor(fullName, language, hobby, education, workplace, position) {
//         this.fullName = fullName
//         this.language = language
//         this.hobby = hobby
//         this.education = education
//         this.workplace = workplace
//         this.position = position
//     }
// }
//
// // створили масив кодерів з класу coder
// const coders = [/* coders */];
//
// class CoderFilter {
//     filterByName(coders, fullName) {
//         return coders.filter(coder => coder.fullName === fullName)
//     }
//
//     filterBySize(coders, language) {
//         return coders.filter(coder => coder.language === language)
//     }
//
//     filterByHobby(coders, hobby) {
//         return coders.filter(coder => coder.hobby === hobby)
//     }
// }
//
// const filterByProp = (array, propName, value) =>
//     array.filter(element => element[propName] === value)

/**
 * SOLID
 * Приклад 'L'
 */
// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
//
//     getWidth() {
//         return this.width
//     }
//
//     getHeight() {
//         return this.height
//     }
//
//     setWidth(value) {
//         this.width = value
//     }
//
//     setHeight(value) {
//         this.height = value
//     }
//
//     getArea() {
//         return this.width * this.height
//     }
// }
//
// class Square extends Rectangle {
//     constructor(size) {
//         super(size, size)
//     }
//
//     setWidth(value) {
//         this.width = this.height = value
//     }
//
//     setHeight(value) {
//         this.width = this.height = value
//     }
// }
//
// const square = new Square(2);
//
// square.setWidth(3);
//
// console.log(square.getArea());

/**
 * SOLID
 * Приклад 'I'
 */
class Phone {
    constructor() {
        if (this.constructor.name === 'Phone')
            throw new Error('Phone class is absctract')
    }

    call(number) {
    }

    takePhoto() {
    }

    connectToWifi() {
    }
}

class IPhone extends Phone {
    call(number) {
        // працює
    }

    takePhoto() {
        // працює
    }

    connectToWifi() {
        // працює
    }
}

class Nokia3310 extends Phone {
    call(number) {
        // працює
    }

    takePhoto() {
        // не має камери
    }

    connectToWifi() {
        // не має wifi модулю
    }
}

/**
 * SOLID
 * Приклад 'D'
 */
// class FileSystem {
//     writeToFile(data) {
//         //  якась логіка
//     }
// }
//
// class ExternalDB {
//     writeToDatabase(data) {
//         // якась логіка
//     }
// }
//
// class LocalPersistance {
//     push(data) {
//         //  якась логіка
//     }
// }
//
// class PersistanceManager {
//     saveData(db, data) {
//         if (db instanceof FileSystem) {
//             db.writeToFile(data)
//         }
//
//         if (db instanceof ExternalDB) {
//             db.writeToDatabase(data)
//         }
//
//         if (db instanceof LocalPersistance) {
//             db.push(data)
//         }
//     }
// }
//
// class FileSystem {
//     save(data) {
//         // якась логіка
//     }
// }
//
// class ExternalDB {
//     save(data) {
//         // якась логіка
//     }
// }
//
// class LocalPersistance {
//     save(data) {
//         // якась логіка
//     }
// }
//
// class PersistanceManager {
//     saveData(db, data) {
//         db.save(data)
//     }
// }
