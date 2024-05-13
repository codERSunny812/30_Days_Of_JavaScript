const { error } = require('console');
const fs = require('fs');


// console.log("reading the file asynchronously");


// console.log("async reading start");

// fs.readFile('hey.txt','utf-8',(error , data)=>{
// if(error){
//     console.log("getting error in reading the file");
// }
// console.log("file content is:",data);
// })

// console.log("async  end");



// console.log("reading the file synchronously");


// console.log("sync reading start");


// fs.readFileSync('hey.txt','utf-8',(error,data)=>{
//     if(error){
//         console.log("getting errror in reading the file")
//     }

//     console.log("file data is",data)
// })

// console.log("sync reading end")



// writing in  the file

// const content ="hello"
// // console.log(fs);
// fs.writeFile('hey.txt',content,'utf8',(error)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log("write the file successfullly")
//     // console.log(data);
// })


// const cont = "hello buddy!";


// fs.appendFile('hey.txt',cont,'utf8',(error)=>{
//     if(error){
//         console.log(error);
//         return;
//     }
//     console.log("appending was done successfully");
// })


// making new directory 

// fs.mkdir('sunny',(error)=>{
//     if(error){
//         console.log("directory already exists");
//     }


//     console.log("directory created successfullly");
// })



// to remove any directory 

// fs.rmdir('sunny',(error)=>{
//     if(error){
//         console.log(error)
//     }

//     console.log("directory removed successfullly")
// })


// shallow copy and deep copy 

// let obj = {
//     name: "sunny",
//     age: 22,
//     city: {
//         country: 'india',
//         state: 'uttar pradesh',

//     }
// }

// console.log("the value of the object is:")
// console.log(obj)


// let obj2 = new Object({ ...obj, test:10 });

// console.log("after the  shallow copy:");
// console.log(obj2)



// obj2.city.state = "delhi";

// console.log("the value of the object 2 after changing the value  of the state is:")

// console.log(obj.city.state);
// console.log(obj2.city.state);



// deep copy of the object

// let obj = {
//     name: "sunny",
//     age: 22,
//     city: {
//         country: 'india',
//         state: 'uttar pradesh',

//     }
// }

// console.log("the value of the object is:")
// console.log(obj)


// let obj2 = JSON.parse(JSON.stringify(obj));

// console.log("after the  shallow copy:");
// console.log(obj2)



// obj2.city.state = "delhi";

// console.log("the value of the object 2 after changing the value  of the state is:")

// console.log(obj.city.state);
// console.log(obj2.city.state);


// itrative approach of doing this coz this is not an itrative approach 

// let obj = {
//     name: "sunny",
//     age: 22,
//     city: {
//         country: 'india',
//         state: 'uttar pradesh',

//     }
// }

// console.log("obj is");

// console.log(obj)

// function makeDeepCopy(obj){

//     // check for the object 
//     if(typeof obj != 'object' || obj == null){
//         return obj;
    
//     }

//     // checking for the array 

//     const copiedVal = Array.isArray(obj) ? [] : {};

//     const keys = Object.keys(obj);


//     for(var i = 0;i<keys.length;i++){
//         copiedVal[keys[i]]=makeDeepCopy(obj[keys[i]]);
//     }

//     return copiedVal;

// }


// var copy = makeDeepCopy(obj)


// console.log("deep copy of the obj is");

// console.log(copy)



// obj.city.state="west bangal";



// console.log(obj.city.state)
// console.log(copy.city.state)



let arr = [1,2,4,6,[1,23,4]];


console.log("the array is:")

console.log(arr);


console.log("swallow copy of array is");

const shallow = [...arr];


console.log(shallow);

shallow[4][1]=13;

console.log("the value of shallow array after changing its value")

console.log(shallow)

console.log("the value of the array is ")
console.log(arr)