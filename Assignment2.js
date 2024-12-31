// Array has a method named reverse which can be used to reverse the elements of array. Create a function named reverse that accepts an array and returns a new array with reversed elements. You can't use the reverse method. (Make sure to return a new array).
let nums = [10,11,12,13,14];
function reverse(arr) {
    let getReverse = [];
    for(let i = arr.length-1; i >= 0; i--) {
        getReverse.push(arr[i]);
    }
    return getReverse;
};
console.log(reverse(nums));


// Create a function named arrayToObject that accepts an array and returns an object. The index of the element of the array will become the key and value will become value.
function arrayToObject(arr) {
    let getObj = {};
    for(let i=0; i<arr.length; i++) {
        console.log(getObj.i);
    }
    // return getObj;
}
console.log(arrayToObject(nums));