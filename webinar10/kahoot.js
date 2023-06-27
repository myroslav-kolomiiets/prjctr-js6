/**
 * Task 1
 */

let i = 0;

setTimeout(() => console.log(i), 90);

for (let j = 0; j < 1234567890; j++) {
    i++;
}

/**
 * Task 2
 */

function sayMyName() {
    console.log(this.name);
}

const sayName = sayMyName
    .bind({ name: 'Miro'})
    .bind({ name: 'Mike'});

console.log(sayName());

/**
 * Task 3
 */

const whoAmI = {
    name: 'Mike',
    regularFunction: function () {
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name);
    }
}

whoAmI.regularFunction();
whoAmI.arrowFunction();

/**
 * Task 4
 */

const whoAmI2 = {
    name: 'Mike',
    regularFunction: function () {
        console.log(this.name);
    },
    arrowFunction: function () {
        return () => {
            console.log(this.name);
        }
    }
}

whoAmI2.regularFunction();
whoAmI2.arrowFunction()();

/**
 * Task 5
 */

const toy = {
    firsName: 'Winnie',
    lastName: 'Pooh',
    getToyName: function () {
        return `${this.firsName} ${this.lastName}`;
    }
}

const toyStory = function (snack, unlike) {
    console.log(`${this.getToyName()} loves ${snack} and doesn\'t like ${unlike}`);
}

toyStory.apply(toy, ['honey', 'bees']);
