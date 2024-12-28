
// array creation in js

const cars = ["Saab", "Volvo", "BMW"]; //array literal method

console.log(cars[1]);

//changing the array element

cars[1]="jaguar"

console.log(cars[1])

// accessing full array 
console.log(cars)


// iteration in array 
for(let i=0;i<cars.length;i++){
    console.log(cars[i])
}


// If you use named indexes, JavaScript will redefine the array to an object.
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined

console.log(person.length)

// array methods

const array=[]

array.push(12);
array.push(133)
console.log(array)

array.unshift(99)
console.log(array)

const length = array.length

const newarr = array.join("*") //just like toString
console.log(newarr)

const newConcatedArr= array.concat(cars) //does not change the original array and return a new array

console.log(newConcatedArr)

newConcatedArr.copyWithin(1, 2, 3) //copies array elements to another position in an array, overwriting existing values:(excluding 3)
console.log(newConcatedArr)


const myArr = [[1, 2], [3, 4], [5, 6,7]];
const newArr = myArr.flat(); //create a new array with subarray element
console.log(newArr);


const newLength = newConcatedArr.splice(3) //return the trimmed array

console.log(newConcatedArr)
console.log(newLength)

const newArr3=newConcatedArr.splice(2,5,99,98,97,96)

console.log(newArr3)
console.log(newConcatedArr)

const arraynew= newConcatedArr.slice(1,4)
console.log(arraynew)














