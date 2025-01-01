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
        getObj[i] = arr[i];
    }
    return getObj;
}
console.log(arrayToObject(nums));


// Deep Clone the object given below using spread (...) operator also write multiple test to check if the object is deep cloned or not.
let info = [
    {
      employee: 'Nicole',
      total: 13,
      lineItems: {
        elements: [
          {
            name: 'Burger',
            price: 8,
          },
          {
            name: 'Lamb',
            price: 6.5,
          },
        ],
      },
    },
    {
      employee: 'Dan',
      total: 11,
      lineItems: {
        elements: [
          {
            name: 'Lamb',
            price: 4.5,
          },
          {
            name: 'Meatballs',
            price: 6.5,
          },
        ],
      },
    },
  ];
  let personsInfo =  [{...info[0]}, {...info[1]}];

//   let personsInfo1 =  [{...info[0], lineItems: {...info[0].lineItems.elements[0]}}, {...info[1], lineItems: {...info[1].lineItems.elements[0]}}];

  let personsInfo2 =  [{...info[0], lineItems: {...info[0].lineItems.elements[0]}, lineItems: {...info[0].lineItems.elements[1]}}, {...info[1], lineItems: {...info[1].lineItems.elements[0]}, lineItems: {...info[1].lineItems.elements[1]}}];

  console.log(personsInfo);
//   console.log(personsInfo1);
  console.log(personsInfo2);