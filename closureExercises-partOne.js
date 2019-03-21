

const createFunction = () => {
  const sayHello = () => {
    console.log(`hello`); 
  }
	return sayHello; 
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var function1 = createFunction();
// function1();



const createFunctionPrinter = input => {
	const printInput = () => {
    console.log(input); 
  }
  return printInput; 
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var printSample = createFunctionPrinter('sample');
// printSample();
// var printHello = createFunctionPrinter('hello');
// printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();



const addByX = x => {
  const additionFunction = z => {
    console.log(x + z); 
  }
	return additionFunction; 
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
//addByTwo(1); 

// now call addByTwo with an input of 2
//addByTwo(2);
