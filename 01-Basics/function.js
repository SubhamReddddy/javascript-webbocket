//What is function ?
//Function is a piece of code. if we want to use it in the same file or another file we dont need to write again 
//and again. It gives the reusability feature so it decreases redundancy and space.

// Function definition : where we define the function by using function keyword.
    // Function  body starts and ends with {}(curly braces) .
    // Without function call we cannot execute the function. so for executing the function we must call the function.

function sayMyName(){  
console.log("S");
console.log("A");
console.log("N");
console.log("E");
console.log("A");
console.log("Y");
}
sayMyName();
sayMyName();
sayMyName();
sayMyName();
sayMyName();

function addTwoNos (num1,num2) {    //function parameter passed on the time of function definition
     console.log(num1+num2)
}
addTwoNos(5,6);         //function agrument passed on the time of function call

function addnos (num1,num2){
    const result = num1 + num2;
    console.log(result);
}
addnos(5,6);

function addingNo (num1 , num2){
    let sum = num1 +num2;
    console.log(sum);
}
const sum = addingNo (5,8);

function addNos (number1, number2) {
    return number1 + number2;
    console.log("Hello"); // this line won't be executed because after return keyword nothing will be execute. return keyword is the exit point of a function.
}
const result = addNos(10,10);
console.log(result);

function loginUserMessage (username = "Rakhi"){
    if(username === undefined){
        console.log(`${username}, please enter valid username`);
        return
    }
    console.log(`${username},just loggedin`);
}
loginUserMessage("Saneay");

function addInYourCart(value1,value2,...rest_value)  // spread operator  // rest operator
{
    console.log(value1);
    console.log(value2);
    console.log(rest_value);
}

addInYourCart(30,87,234,42342,4234);