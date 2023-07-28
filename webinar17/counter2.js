/**
 * @param {number} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function(init) {
    let count = init;
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        },
        reset(){
            count = init;
            return count;
        }
    }
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
