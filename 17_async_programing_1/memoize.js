/**
 *
 * @param fn
 * @return {(function(...[*]): (*))|*}
 */
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const n = args.toString();
        if (n in cache) {
            return cache[n];
        } else {
            const result = fn(...args);
            cache[n] = result;
            return result;
        }
    }
}

let callCount = 0;

const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});

memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1