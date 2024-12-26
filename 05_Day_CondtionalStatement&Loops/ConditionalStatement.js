// 1. if statement 
let condition= false;
if(condition ){
    //run only if condition is true 
    console.log(" the condition is true and if block is executed");
}
else{
    console.log("the if block is not executed that's why the else block is executed ");
}

let balance = 1000;
if(balance<500){
    console.log("your balance is lower than 500");
}
else if(balance>500){
    console.log(" your balance  is higher than 500");
}
else if(balance <1200){
    console.log("your balance is less than 1200");
}
else if(balance == 1000){
    console.log(" you have a balance of 1000");
}
else{
    console.log(" good luck ");
}