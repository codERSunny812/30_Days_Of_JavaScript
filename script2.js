// hoisting in javascript

var x = 1
a();
b();
console.log(x)



function a(){
    var x = 12;
    console.log(x)
}

function b(){
    var x=22
    console.log(x)
}