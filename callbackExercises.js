
http://csbin.io/callbacks

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
//console.log(addTwo(3)); //5
//console.log(addTwo(10)); //12

// Challenge 2
function addS(word) {
  return `${word}s`;
}

// uncomment these to check your work
//console.log(addS('pizza'));
//console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  let storage = [];
  for (var i = 0; i < array.length; i++) {
    let element = array[i]; 
    storage.push(callback(element));
  }
  return storage;
}

function multiplyByTwo(num) {
  return num * 2;
}
//console.log(map([1, 2, 3], addTwo));
//console.log(map([1, 2, 3], multiplyByTwo));

// Challenge 4
function forEach(array, callback) {
  let storage = [];
  for (var i = 0; i < array.length; i++) {
    let element = array[i]; 
    storage.push(callback(element));
  }
  return storage;
}

// see for yourself if your forEach works!
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(element, i, array) {
  alphabet += element;
});

console.log(alphabet);   //prints 'abcd'

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  let newArr = [];
  array.forEach(function(element, i, array) {
    newArr.push(callback(element));
  });
  return newArr;
}

//console.log(mapWith([1, 2, 3], addTwo));
//console.log(mapWith([1, 2, 3], multiplyByTwo));

// ---------------------  Extension 2 -------------------
function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  array.forEach(function(element, i, array) {
    accumulator = callback(accumulator, element);
  });
  return accumulator;
}

let abc = '';
const nums = [4, 1, 3];
const add = function(a, b) {
  return a + b;
};
var reduceTest1 = reduce(nums, add, 0); //-> 8
var reduceTest2 = reduce(letters, function(a, b) {return a + b;},abc);
console.log(reduceTest1);
//console.log(reduceTest2);

// ---------------------  Extension 4 -------------------

function concat(a, b) {
  return a.filter(function(element, i, array) {
    return b.includes(element);
  });
}
console.log(concat([1,2,3],[2,3,4])); // [2,3]

function intersection(arrays) {
  let args = Array.from(arguments);
  return reduce(args, concat, args[0]);
}

//console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [15, 5]

// ---------------------  Extension 4 -------------------
function unique(a, b) {
  return a.concat(b.filter(function(element,i, array) {
      return a.includes(element) === false;
    })
  );
}
    
function union(arrays) {
  let args = Array.from(arguments);
  return reduce(args, unique, args[0]);
}

console.log([1,2,'duck',3].includes(8) === false)

//console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

/*
Order Functions

Challenge 1
Create a function addTwo that accepts one input and adds 2 to it.
Challenge 2
Create a function addS that accepts one input and adds an "s" to it.
Challenge 3
Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
multiplyByTwo(1); //-> 2
multiplyByTwo(2); //-> 4
  
Challenge 4
The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);   //prints 'abcd'
Extension 1
In the first part of the extension, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.
Extension 2
The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8
Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.
Extension 3
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!
Extension 4
Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
*/
