
http://csbin.io/callbacks


// Challenge 1
function addTwo(num) {
    return num + 2
}

///////////////////////////////////////////////////////////////////////////////////////

// Challenge 2
function addS(word) {
    return word + 's'
}

///////////////////////////////////////////////////////////////////////////////////////

// Challenge 3
function map(array, callback) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr[i] = callback(array[i]);
    }
    return newArr
}

///////////////////////////////////////////////////////////////////////////////////////

// Challenge 4 //
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

///////////////////////////////////////////////////////////////////////////////////////

// Extension 1 //
function mapWith(array, callback) {
    let newArr = [];
    forEach(array, function (i) {
        newArr.push(callback(i));
    });
    return newArr;
}
}

///////////////////////////////////////////////////////////////////////////////////////

// Extension 2 //
function reduce(array, callback, initialValue) {
    let total = initialValue;
    for (let i = 0; i < array.length; i++) {
        total = callback(total, array[i]);
    }
    return total;
}

var add = function (a, b) { return a + b; };
var nums = [4, 1, 3];
console.log(reduce(nums, add, 0));

///////////////////////////////////////////////////////////////////////////////////////

// Extension 3 //
function intersection(arrays) {
    //note: 'arguments' is a built-in object corresponding, in this case, to what was passed in for arrays
    let result = [];
    for (let k = 1; k < arguments.length - 1; k++) { //loops through arrays
        //console.log(arrays[k]);
        for (let i = 0; i < arguments[0].length; i++) { //loops through first array
            for (let j = 0; j < arguments[k].length; j++) { //loops through k'th array
                if (arguments[0][i] === arguments[k][j]) { //checks if the value is the same as in the first array
                    if (!result.includes(arguments[0][i])) { //checks if number is already noted
                        result.push(arguments[0][i]) //adds the number to our array with elements in all arrays 
                    }
                }
            }
        }
    }
    return result;
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

///////////////////////////////////////////////////////////////////////////////////////

//Extension 4 // 
function union(arrays) {
    //note: 'arguments' is a built-in object corresponding, in this case, to what was passed in for arrays
    let result = []
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            if (!result.includes(arguments[i][j])) {
                result.push(arguments[i][j]);
            }
        }
    }
    return result
}
console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]


///////////////////////////////////////////////////////////////////////////////////////


//Extension 5 //
function objOfMatches(array1, array2, callback) {
    let obj = {};
    for (let i = 0; i < array1.length; i++) {
        if (callback(array1[i]) === array2[i]) { //checks if output matches the element
            obj[array1[i]] = array2[i];
        }
    }
    return obj;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function (str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

///////////////////////////////////////////////////////////////////////////////////////

//Extension 6 //

function multiMap(arrVals, arrCallbacks) {
    let obj = {};
    for (let i = 0; i < arrVals.length; i++) {
        let result = [];
        for (let j = 0; j < arrCallbacks.length; j++) {
            let currCb = arrCallbacks[j];
            result.push(currCb(arrVals[i]));
        }
        obj[arrVals[i]] = result;
    }
    return obj;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function (str) { return str.toUpperCase(); }, function (str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function (str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

/*
Higher Order Functions (first-class citizens)

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
