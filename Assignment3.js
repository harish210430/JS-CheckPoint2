// Below you will find some inputs and outputs. You have to write the name of the array methods that can/should be used to get the output from the input. You don't have to write how you get the output. Just write the name and the reason why you should use the specific method.

// First it's input and after ==> is output.
/*
1. [1, 2, ,3 , 5] ==> log 1, 2, 3, 5
*/
// Method: forEach method
// Reason: it loop over to each element and log them.

/*
2. [1, 3, 4, 5, 6] ==> [1, 3, 4, 5, 6]
*/
// Method: map method
// Reason: Accept a cbfn func. it also loop over to each element and return the same size of Array.

/*
3. [1, 3, 4, 5, 6] ==> 38
*/
// Method: Reduce method
// Reason: it reduce the multiple values to a single value, Accept two params. (cbfn, intl_val), acc holds the intl_vlue and then whatEver cbfn returns become the next value of acc. It returns acc + double of num. 

/*
4. [1, 3, 4, 5, 6] ==> {0: 1, 1: 3, 2: 4, 3: 5, 4: 5, 5: 6}
*/
// Method: Reduce Method
// Reason: it reduce the collection of value into different shape of values Or into a single value. it returns the single Object. acc holds the empty Obj. as intl_val then it loops over each element then pushed by using property to the Obj then return it.

/*
5. [1, 3, 4, 5, 6] ==> ['one', 'three', 'four', 'five', 'six']
*/
// Method: Map method
// Reason: it loops over each elements with the condition and returns the same size of new Array,  

/*
6. ["work", "touched tree", "pizza", "running", "television"] ==> output is a string
*/
// Method: join method
// Reason: it joins the Array's elements and converts them into a string.

/*
7. ["work", "touched tree", "pizza", "running", "television"] ==> output is a number
*/
// Method: map method
// Reason: map gives the same size of new array.

/*
8. ["work", "touched tree", "pizza", "running", "television"] ==> output is an object
*/
// Method: reduce method
// Ṛeason: it reduce the collection of value into diff. shape's values And accept cbfn and an Obj at place of initl_val as arguments, it loops over each element and pushed them into Obj. acc accepts whatever cbfn returns.
// acc = intil_val = {Empty Obj} 

/*
9. ["work", "touched tree", "pizza", "running", "television"] ==> ['w', 't', 'p', 'r', 't']
*/
// Method: map method 
// Reason: it return the same size of new Array, loops over each element and use startsWith method also.

/*
10. ["work", "touched tree", "pizza", "running", "television"] ==> log all the elements of the array
*/
// Method: forEach Method
// Reason: it loops over each element and log them one by one. it does not return Anything.
