/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk = function(arr, size) {
    const res = [];
    let counter = 0;
    for (let i = 0; i < arr.length / size; i++) {
        res.push(arr.slice(counter, size + counter));
        counter += size;
    }
    return res;
};

console.log(chunk([1,2,3,4,5], 1)); // [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

console.log(chunk([1,9,6,3,2], 3)) // [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.

console.log(chunk([8,5,3,2,6], 6)) // [[8,5,3,2,6]]
// Explanation: Size is greater than arr.length thus all elements are in the first subarray.
