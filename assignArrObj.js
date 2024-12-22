/*
1. Explain the mutability of non primitive data types. Explain with two examples.
*/
// Non-Premitive data types: Object [Array: is a type of Object]
// Mutability is the method that can change the Value of Object.
// Explain:
let user = {
    name: "India",
    pm : "Narendra Modi",
    capital : "New Delhi",
    colors : ["saffron", "green", "white"],
};
console.log(user);
user.president = "Dropadi Murmu";
console.log(user);

let ambani = ["DeeruBhai", "Mukesh", "Anil"];
console.log(ambani);
ambani.push("Neeta", "Anant");
console.log(ambani);

/*
2. What is the difference between deep cloning and shallow cloning.
*/
// cloning/copying all values as is it with the '...' Operator called shallow clonig.
let newUser = {
    ...user,
};
console.log(newUser);

//  cloning/copying each layer or deeper as much as you can is called Deep cloning.
let country = {
    ...user, 
    colors: [...user.colors],
};
console.log(country);


// Deep clone the following arrays or objects. After cloning store the data into a variable.
let user1 = { name: 'Arya Stark'};
let newUser1 = user1;
console.log(newUser1);


// Use Object.assign to clone:
let user2 = { name: 'Arya Stark'};
let newUser2 = Object.assign({}, user2);
console.log(newUser2);

let arr = ['a', 'b', 'c'];
let storedArr = Object.assign([], arr);
let storedObj = Object.assign({}, arr);
console.log(storedArr); 
console.log(storedObj);

let colors = [
    { name: 'red' },
    { name: 'gray' },
    { name: 'tomato' },
  ];
let colorsC = Object.assign([], colors);
let colorsCObj = Object.assign({}, colors);
console.log(colorsC);
console.log(colorsCObj);

// Is the variable named clone a deep clone of the variable arr in the code given below. If yes check by doing console.log(arr[2] === clone[2]) and explaing why it's not a deep clone. Create another variable named anotherClone and store the deep clone of arr.
let arr1 = [1, 2, [3]];
let clone = [...arr1];

console.log(arr1[2] === clone[2]); // true, Becoz they have same value at position 2 But it's not a deep clone becoz it is clone by one layer only Not cloned deep inside. 

let anotherClone = [...arr1, ...arr1[2]];
console.log(anotherClone);


// List the data types in JavaScript that is mutable and immutable with an example of value.

/*
Mutable datatypes: Array, Object (Non-premitive datatypes are mutable).
Immutable datatypes: string, boolean, integer, null, undefined, NaN (Premitive datatypes are immutable).
*/
let students = ["Ankit", "Dheeraj", "Harsh", "Rohit"];
students.push("Virat");
console.log(students); // mutable

let story = "A cleaver Fox can not jump out from the Well";
console.log(story.concat(" Never"));
console.log(story); // Immutable


// Using for loop and map create a clone of the given array. Store the cloned values in variables.
let numbers = [1, 2, 3];

// for loop
let cloneNum = [];
for(let i=0; i<numbers.length; i++) {
    cloneNum[i] = numbers[i];
}
console.log(cloneNum);

// map
let cloneNumbers = numbers.map(n => n);
console.log(cloneNumbers);


// List the array methods that mutates the original array with an example.
// Array methods that mutates the original array.

// 1. push(): it add elements in last of index.
let fruits = ["Apple", "Orange", "Grapes", "Papaya", "Banana", "Litchi"];
fruits.push("Guava");
console.log(fruits);

// 2. pop(); it delete element from last index.
fruits.pop();
console.log(fruits);

// 3. Unshift(): it add element at start of index.
fruits.unshift("Pomgrannet");
console.log(fruits);

// 4. Shift(): it delete element from start.
fruits.shift();
console.log(fruits);

// 5. Reverse(): it reverse the index of array.
fruits.reverse();
console.log(fruits);

// 6. Splice(): it is used to removing and replacing element.
fruits.splice(0,0,"Mango");
console.log(fruits);


// List the array methods that does not mutates the original array with an example.

let mdFruits = ["Apple", ["Banana", ["Cherry", "Papaya"], "Mango"], "Orange"];

// 1. Flat(): use to convert multi-dimension Arr into 1-D Arr.
console.log(mdFruits.flat(2));
console.log(mdFruits);

// 2. Concat(): it add/Concat the elements/two Array and return new Array.
console.log(fruits.concat("cherry"));
console.log(fruits);

// 3. toString(): converts Array to String.
console.log(fruits.toString());
console.log(fruits);

// 4. slice(): it returns piece of array/string.
console.log(fruits.slice(3));
console.log(fruits);

// 5. join(): it convert array to string.
console.log(fruits.join(" "));
console.log(fruits);
 
// 6. indexOf(): it returns the index of element.
console.log(fruits.indexOf("Papaya"));

// 7. includes(): returns true/false based on element find or not.
console.log(fruits.includes("Banana"));


// Explain copy by value, copy by reference, pass by value and pass by reference. Write multiple examples to explain this.
