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
const sum1 = addingNo (5,8);

function addNos (number1, number2) {
    return number1 + number2;
    console.log("Hello"); // this line won't be executed because after return keyword nothing will be execute. return keyword is the exit point of a function.
}
const result1 = addNos(10,10);
console.log(result1);

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

    if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(a);
    console.log(b);
    }
     c=300;
    console.log(c);
    
    
    function parentFunction(username){
    
        function childFunction(location,num1,num2){
            console.log(`currently I'm at office location is ${location}.`);
            return num1+num2;
        }
        console.log(`Hello Everybody ${username}`);
        sum11 = childFunction("Kolathia",10,20);     //childFunction is only access/call inside the parentFunction. 
        console.log(sum11);                          // you can't access/call inside the parentFunction.
    }
   parentFunction("Ajay");
  
    
   //Arrow function (fat arrow function)
     
    const sumTwoNos = (num1,num2) => {
        //body
        console.log("hello");
        return num1+num2;
    }
    const sum =sumTwoNos(4,8);
    console.log(sum);
    
    
    const message = (msg ="good evening") => {
        console.log(msg)
    }
    message('noob');
    
    const summation = (number1=10,number2=20) =>
    {
        return number1 + number2;
    }
    
    const result = summation();
    console.log(result);
    
    const addition = (num1,num2) => num1 + num2;
    console.log(addition(4,6));
    
    const obj1 = {
        name : "abc",
        id : 101,
        location : "bbsr",
        functionName(){
            console.log(`hello username is ${this.name}`);
            console.log(this);
        }
    };
    console.log(`hello ${this.name}`);   // output: hello undefined
    obj1.functionName();                 // output: hello username is abc
                                         // {
                                         //   name: 'abc',
                                         //   id: 101,
                                         //   location: 'bbsr',
                                         //   functionName: [Function: functionName]
                                         // }
    console.log(this);                   // output:  {}
    
    
    oneCount(5);           // you can call a normal function before function defination.
    function oneCount (count){
        console.log(count+1);
    }
    
    
    // twoCount(10);    //in arrow function never call a function before function defintion. Otherwise it 
    //                  //will behave like hoisting.
    // const twoCount = (count) =>{
    //     console.log(count + 2)
    // }
    
    
    var a;
    console.log(a);
    a =10;
    
    //IIFE(Immediate involved function execution)
    
    (function fetchingData () {
        console.log("Data fetched from database");
    })();       //if we are defining more than one iife function then we need to properly closed the first function by using semi colon ";".
    
    ((name) => {
        console.log(`database fetched from this table ${name}`)
    })("Student_information");