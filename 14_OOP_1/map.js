Array.prototype.customMap = function (fn) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(fn(this[i]));
    }

    return res;
}

const multiple = a => a * 2;

console.log([1,2,3,4].customMap(multiple));
