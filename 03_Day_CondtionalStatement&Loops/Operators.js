// basic operator 
// 1.arithimetic
// a. modulus
alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4
// b. addition
alert( 5 + 2 ); // 7
alert( 8 + 3 ); // 11
alert( 8 + 4 ); // 12


// c. Subtraction 
alert( 5 - 2 ); // 3
alert( 8 - 3 ); // 5
alert( 8 - 4 ); // 12

// d. multiplication
alert( 5 * 2 ); // 10
alert( 8 * 3 ); // 24
alert( 8 * 4 ); // 32

// e. division 
alert( 5 / 2 ); // 2
alert( 8 / 3 ); // 2
alert( 8 / 4 ); // 2



// f. exponential 

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16



// ternary operator
// Syntax:

condition ? exprIfTrue : exprIfFalse

const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"


// nullish coalescing operator 

// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.


let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
