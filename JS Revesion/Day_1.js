//data type in js
//primitive data types
let rollNumber = 12;
let name = "John";
let aboutStudent = `the name of the student is ${name} and roll number is ${rollNumber}`
let isStudent = true;
let x;
let y = null;
let sym = Symbol("id");
let bigIntValue = 123456789012345678901234567890n;




console.log("the type of the variables are:");
console.log(typeof rollNumber)
console.log(typeof name)
console.log(typeof isStudent)
console.log(typeof x)
console.log(typeof y)
console.log(typeof sym)
console.log(typeof bigIntValue)


console.log("the value of the variable are:")
console.log(rollNumber)
console.log(name)
console.log(aboutStudent)
console.log(isStudent)
console.log(x)
console.log(y)
console.log(sym)
console.log(bigIntValue)


// copying in the data type 

//in primitive data type 

let number1= 12;
let number2= number1;

console.log(`the value of both the  number are ${number1} and ${number2}`);

number1=3;

console.log(`the value of both the  number are ${number1} and ${number2}`);



// in non primitive data type 

let bioDataOfPerson1= {
    name:"sunny",
    age:22,
    hobbies:["football","travelling","coding"]
}


let bioDataOfPerson2=bioDataOfPerson1;

console.log(`the value of both the bio data are ${bioDataOfPerson1.name} and ${bioDataOfPerson2.name}`)



 bioDataOfPerson1.name="shivashish"


console.log(`the value of both the bio data are ${bioDataOfPerson1.name} and ${bioDataOfPerson2.name}`)

