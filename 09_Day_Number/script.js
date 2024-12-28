// avaScript has only one type of number.Numbers can be written with or without decimals.

let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals



let a=12
let b=13
console.log(a+b)

let c=14
let d = "15"
console.log(c+d)


let e="16"
let f=17
console.log(e+f)


// JavaScript will try to convert strings to numbers in all numeric operations:

let g="18"
let h="19"
console.log(g/h)

// this will also work

let i="12"
let j="13"

console.log(i*j)

// this will also 

let k=12
let l="13"
let m="14"

console.log(k-l)
console.log(l-k)
console.log(l-m)

// javascript uses the + operator to concact a  string


// NaN - Not a Number

// this is a reserved keyword in javascript which shows that the number is not a valid number
let n=12
console.log(n/"sunny")


// but if the string is numric then the result will also be a number 

// we can also use a global javascript function isNAN to find out a  number is real or not 

// Similarly inifinity 

// Big INt


let o=1234123412341234123
console.log(o)


// JavaScript integers are only accurate up to 15 digits beyound this it will losses it precesion so we can use  bigint for that

let p = 9999999999999999;
let q = 9999999999999999n;

console.log(p)
console.log(q)


// Minimum and Maximum Safe Integers

let r = Number.MAX_SAFE_INTEGER;
let s = Number.MIN_SAFE_INTEGER;

console.log(r)
console.log(s)


// New Number Methods
// ES6 also added 2 new methods to the Number object:

// Number.isInteger()
// Number.isSafeInteger()



// safe integers are all integers from - (253 - 1) to + (253 - 1).



// Number methods

// 1. toString method
let t = 123;
t.toString();
(123).toString();
(100 + 23).toString();

console.log(typeof t.toString())


// The toExponential() Method

let u = 9.656;
console.log(u.toExponential(2))
console.log(u.toExponential(4))


// similarly to fixed method

let v = 9.656;
console.log(v.toFixed(0))
console.log(v.toFixed(2))
console.log(v.toFixed(4))
console.log(v.toFixed(6))



// similarly is the to precesion function

// 4. the valueOf

// it return the number value of a number or numeric string 





