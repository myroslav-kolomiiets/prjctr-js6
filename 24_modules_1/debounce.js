/**
 * @param {Function} fn
 * @param {number} delay milliseconds
 * @return {Function}
 */

const debounce = function(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    }
};

const log = debounce(console.log, 1000);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=1000ms
