// Array creation in JS
const cars = ["Saab", "Volvo", "BMW"]; // Line 1: Array literal method to create an array
console.log(cars[1]); // Line 2: Accessing element at index 1

// Changing an array element
cars[1] = "Jaguar";
console.log(cars[1]); // Line 4: Accessing updated element at index 1

// Accessing the full array
console.log(cars); // Line 6: Output: ["Saab", "Jaguar", "BMW"]

// Iterating through the array using a loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]); // Line 9: Iterating and printing each element in the array
}

// Using named indexes in an array (this turns it into an object)
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;

console.log(person.length); // Line 13: Will return 0 because arrays with named indexes are treated as objects
console.log(person[0]); // Line 14: Will return undefined since we are using named indexes

// Array methods
const array = [];

// Adding elements to the array using push (adds to the end of the array)
array.push(12);
array.push(133);
console.log(array); // Line 18: Output: [12, 133]

// Adding an element to the beginning of the array using unshift
array.unshift(99);
console.log(array); // Line 20: Output: [99, 12, 133]

// Joining array elements into a string using join
const newArr = array.join("*"); // Line 22: Similar to toString() but with a custom delimiter
console.log(newArr); // Line 23: Output: "99*12*133"

// Concatenating two arrays using concat (does not modify the original array)
const newConcatedArr = array.concat(cars); // Line 25: Returns a new array without modifying the original
console.log(newConcatedArr);

// Using copyWithin to modify the array in-place (copies elements within the array)
newConcatedArr.copyWithin(1, 2, 3); // Line 29: Copies elements from index 2 to 3 and places them at index 1
console.log(newConcatedArr); // Line 30: Modified array

// Flattening a nested array using flat
const myArr = [[1, 2], [3, 4], [5, 6, 7]];
const flatArr = myArr.flat(); // Line 32: Creates a new array with the subarray elements
console.log(flatArr); // Line 33: Output: [1, 2, 3, 4, 5, 6, 7]

// Using splice to modify an array in-place (removes or replaces elements)
const newLength = newConcatedArr.splice(3); // Line 35: Removes all elements starting from index 3 and returns the removed elements
console.log(newConcatedArr); // Line 36: Array after modification
console.log(newLength); // Line 37: Output: Removed elements

// Modifying an array using splice (replacing elements)
const newArr3 = newConcatedArr.splice(2, 5, 99, 98, 97, 96);
console.log(newArr3); // Line 39: Removed elements: [18, 22, 26]
console.log(newConcatedArr); // Line 40: Array after modification

// Using slice to create a new array (non-destructive)
const arrayNew = newConcatedArr.slice(1, 4); // Line 42: Creates a new array from index 1 to 4 (excluding index 4)
console.log(arrayNew); // Line 43: Output: New sliced array

// Searching methods in array

// The indexOf() method searches an array for an element value and returns its position.
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find((value) => value > 18); // Line 46: The find method returns the first element that matches the condition
console.log(first); // Line 47: Output: 25

// Iteration methods

// 1. forEach - executes a function for each element in the array
console.log("forEach function in JS");
const numbersForEach = [45, 4, 9, 16, 25];
numbersForEach.forEach((item, index, numbersForEach) => {
    console.log(`${item} and ${index} and ${numbersForEach}`); // Line 51: Output each element and its index
});

// 2. map - returns a new array by applying a function to each element
console.log("map function in JS");
const number2 = [1, 3, 5, 9, 11, 13];
const mapValue = number2.map((item, index, number2) => {
    console.log(`${item} and ${index} and ${number2}`); // Line 56: Logs the item, index, and the full array
    return item * 2; // Line 58: Return new array with doubled values
});
console.log(mapValue); // Line 59: Output: [2, 6, 10, 18, 22, 26]

// 3. filter - returns a new array with values greater than 10
console.log("filter function in JS");
const number3 = [1, 3, 5, 9, 11, 13];
const filterValue = number3.filter((item, index, number3) => {
    item *= 2; // Line 63: Double the item
    console.log(`${item} and ${index} and ${number3}`); // Line 64: Logs the item, index, and the full array
    return item > 10; // Line 66: Return items that are greater than 10
});
console.log(filterValue); // Line 67: Output: [18, 22, 26]

// 4. reduce - returns a single value by iterating over the array and accumulating a result
console.log("reduce function in JS");
const number4 = [1, 2, 3, 4, 5];
const reducedValue = number4.reduce((acc, currentIndex, i) => {
    console.log(`${acc} and ${currentIndex} and ${i}`); // Line 71: Logs the accumulator, current index value, and current index
    return acc + currentIndex; // Line 73: Accumulates the sum of all elements
}, 0); // Line 75: Initial value of accumulator is 0

console.log(reducedValue); // Line 77: Output: 15 (sum of all numbers)


// similarly there is a method called reduceright which help in to reduce the value starting from the right 


// 5. every function in javascript

console.log("every method in javascript")

// every function check evry array element for the given condtion and if all the array element satisfy the  condition then return true

const array1 = [2,4,6,8,10]

const valueOfArray1 = array1.every((value,index,array1)=>{
// console.log(`{${value} : ${index} : ${array1} }`)
return value > 2
})

console.log(valueOfArray1);


// 5. some function in javascript

console.log("some method in javascript")

// some function check evry array element for the given condtion and if any of the array element satisfy the  condition then return true

const array2 = [2, 4, 6, 8, 10]

const valueOfArray2 = array2.some((value, index, array1) => {
    // console.log(`{${value} : ${index} : ${array1} }`)
    return value > 2
})

console.log(valueOfArray1);


// with method 

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March"); //doesn't affect real aray 

console.log(months)
console.log(myMonths)


// array keys and values 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys(); //return array iterator object with the array keys
const values = fruits.values()  ////return array iterator object with the array values


// similarly the entries function will return an array iterator object with both key and value pair


// Spread operator 

// it will spread and iterable into more elements

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year)




