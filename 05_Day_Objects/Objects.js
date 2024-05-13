// how object is created 
let users ={
    name:"sunny",
    age:21,
    gender:"male",
    "full name":"sushil pandey"
}

console.log(users);

// ways to acess the objects
// 1.using dot notation
console.log(users.name);

// 2. using bracket notation 
console.log(users["full name"]);
// this can be used when we have multiword key 

// to check a specific key is present in the object
console.log("name" in users);


// to itrate a object
 for(let key  in users){
    console.log(key);
    console.log(`the key of the user object is ${key} and its value is ${users[key]}`);
 }


//  ordered in a object 
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
}

// In js the object follow interger property and interger arange in asending order but this is not true in case of non integer 


// Object references and copying

// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

let message = "Hello!";
let phrase = message;

console.log(message+" "+phrase);

phrase="hello world!";

console.log(message + " " + phrase);

// phrase is chnaged but the Message will not

// but in case of object this is not true 

let user = { name: "sunny" , age:21 };

let admin = user; // copy the reference

console.log(user + " " + admin);

admin.age=23;

console.log(user + " " + admin);


// comparision of object 

let a = {};
let b = a; // copy the reference

alert(a == b); // true, both variables reference the same object
alert(a === b); // true

let a1 = {};
let b1 = {}; // two independent objects

alert(a1 == b1); // false

// Two objects are equal only if they are the same object.


// cloning of object 

let user1 = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user1) {
    clone[key] = user[key];
}


// we can also use the object.assign function

// whose syntax is :
// Object.assign(dest, ...sources)
// here dest is the target object 
// and sources is the source object 

let user3 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user3, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user3.name); // John
alert(user3.canView); // true
alert(user3.canEdit); // true

