/*Javascript is so smart it can automatically convert the data type to its required type like alert convert 
everything to string and mathamatical function convert every thing number but in some case we need to  do this explicitly 

*/


// String conversion 
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string


// Numeric conversion
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

// Boolan conversion 

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

// but there are some cases in which you are trying to typecaste a value which is not number into number then you will get NaN(not a number)

let data = 33
let data1 = "33"

let NUmber = Number(data1)
console.log(typeof NUmber)
