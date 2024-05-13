let obj = {
    name:"sunny",
    age:23,
    sayhi:function(){
        console.log("hii from a function ");
        console.log(this.name);
    }
}
obj.sayhi();

// arrow function don't have thier own this. When this is accessed inside an arrow function, it is taken from outside.
let user = {
    firstName: "Ilya",
    sayHi: () => {
        alert(this.firstName);
    }
};

user.sayHi(); // undefined

// Summary
// 1.Functions that are stored in object properties are called “methods”.
// 2.Methods allow objects to “act” like object.doSomething().
// 3.Methods can reference the object as this.