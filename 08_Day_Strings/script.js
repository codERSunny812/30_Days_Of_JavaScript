let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

// templates Strings

let text = `He's often called "Johnny"`;


// string length 

let texLen = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = texLen.length;

// template strings

let textValue =
    `The quick
brown fox
jumps over
the lazy dog`;


// String can also be  defined using new Keyword 

let y = new String("John");

let x = "John";
let z = new String("John");


// Comparing two JavaScript objects always returns false.

// String methods

let person = "sunny";
let lengthOfText = person.length;
console.log(lengthOfText)

console.log("extraction of string characters:");

// 1. at method

let letter = person.at(2);
console.log(letter)

//2. charAt method

let letter2 = person.charAt(2);
console.log(letter2);


//3. charcodeAt method 

let letter3 = person.charCodeAt(2);
console.log(letter3)



// 4. bracket method
let letter4 = person[2];
console.log(letter4)

console.log("extracting string parts");

// Extracting String Parts


// 1. slice 

let textOne = "Apple,Banana,Kiwi";
let part = textOne.slice(7, 12);

console.log(part)

// if the parameter is negative then :

let textTwo = "Apple, Banana, Kiwi";
let partTwo = textTwo.slice(-12,-3);
console.log(partTwo)


// 2. substring 

let str = "Apple,Banana,Kiwi";
let partThree = str.substring(7,12);

console.log(partThree)


let textThree = "Apple,Banana,Kiwi";
let partFour = textThree.substring(-12, -3);
console.log(partTwo)


let strTwo = "Apple,Banana,Kiwi";
let partFive = str.substr(7, 6);
console.log(partFive)



// It pads a string with another string(multiple times) until it reaches a given length.


let textFour = "5";
let padded = textFour.padStart(4, "0");

console.log(padded)



let textFive = "Hello world!";
let result = textFive.repeat(2); //will return a new string and does not modify the original one

console.log(textFive)
console.log(result)

let textSix = "Please visit Microsoft and Microsoft!";
let newText = textSix.replace("Microsoft", "W3Schools"); // also return new string and does not modify the original string and it matches the first string

// If you want to work with a string as an array, you can convert it to an array.








