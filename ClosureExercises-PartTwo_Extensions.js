//Example of creating closure for another function: 

const makeCounter = noun => {
  let counter = 0;
  function innerCount(){
    counter++
    console.log(`${counter} ${noun}`);
  }
  return innerCount;
}
let countLikes = makeCounter('Likes');
// countLikes();
// countLikes();
// countLikes(); 

const intructionGenerator = () => {
  function multiplyBy2(num){
    return num*2;
  }
  return multiplyBy2;
}

let generatedFunc = intructionGenerator();
let result = generatedFunc(8);
// console.log(generatedFunc(8)); // or you can console.log the result,
// console.log(result); 
//___________

//let counter = 0; //If we define globally, incrementCounter will count up every time
//___________

//Score A 
const outer = () => {
  //Score B 
  let counter = 0; //Defined in Scope B to setup the Closure, the Lexical Scope, the "Closed over variable environment"
  function incrementCounter(){
   //Scope C --> counter is accessible here
   // let counter = 0; 
   
   //if we define counter = 0, here, it will always be 1 because we are defining it in this local execution context. JS doesn't go out into global to look for variable counter, anymore! 
    counter++;
    console.log(counter);
    return counter;
  }
  return incrementCounter;
}

let myNewFunc = outer();

myNewFunc();
myNewFunc();

let anotherFunc = outer();

anotherFunc();
anotherFunc();

let staythree = myNewFunc();

myNewFunc();
//staythree;
myNewFunc();
myNewFunclet
//staythree;


//HW---------
console.log('---------------HomeWork----------------')
const addByX = x => {
	function innerFunc(input){
    return ( input + x );
  }
  return innerFunc;
}

let addByTwo = addByX(2); // innerFunc(input){return input +2}
// addByTwo(1); //should return 3
// addByTwo(2); //should return 4
// addByTwo(3); //should return 5

//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let firstCall;
  
  function inner(input){
    if(!firstCall){
      firstCall = func(input);
      return firstCall;
    }else{
      return firstCall;
    }
  }
  return inner;
}

let onceFunc = once(addByTwo);

// // UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6



function after(count, func) {
  counter = 0;
  function inner(){
    counter++;
    if(counter < count){
      //Do Nothing 
    }else{
      return func();
    }
  }
  return inner;
}

let called = function() { console.log('hello') };
let afterCalled = after(3, called);

afterCalled(); // nothing is printed
afterCalled(); // nothing is printed
afterCalled(); // 'hello' is printed


function delay(func, wait) {
  return setTimeout(func, wait);
}

delay(onceFunc(10), 5000);

/*
Extension: Challenge 5
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
Extension: Challenge 6
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
Extension: Challenge 7
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
*/

///////Challeng 6 - what will the result be?

function mystery ( input ){
  let secret = 4;
  input+=2;
  function mystery2 ( multiplier ) { 
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3 ( param ){
  function mystery4 ( bonus ){
    return param(6) + bonus;
  }
  return mystery4;
}

let hidden = mystery(3);
let jumble = mystery3(hidden); //mystery4
let result = jumble(2);

result;


