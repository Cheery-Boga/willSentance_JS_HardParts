/** 

during the higher-order function creation, when the function returns a function; It returns the inner function with a 'backpack', a store of data on its back. 

The backpack is persistent. It holds on to that data live. What if your functions have persistent memory between calls? That data is held in the backpack!

    
the 'backpack' the function gets a hidden property (a hidden bond, where JS makes a bond with the variable environment). Behind the scenes it is denoted as [[scope]].

Additionally, you can only access this live data, or 'backpack', from the call to that function that is carrying the 'backpack'. Nothing else has access to those hidden variables inside the 'backpack'. 

__________

asynchronous - is a list of rules
OOP  - is a list of techniques
Closures - is a conceptionally beautiful and empowering approach in JS. 


__________ **/

/** 

LEXICAL SCOPE

When a function is defined, it gets a [[scope]] property that references the Local Memory/Variable Environment in which it has been defined. **/

function outer() {
    let counter = 0; 
    function incrementCounter() {
        counter++; 
}
return incrementCounter; 
}

let myNewFunction = outer(); // myNewFunction = incrementCounter

myNewFunction(); 
myNewFunction(); 

/** 

Wherever we call that incrementCounter function - it will always look first in its immediate local memory (variable environment), and then in the [[scope]] property next before it looks any further up. 

**/

/**

JAVASCRIPT STATIC / LEXICAL SCOPING

'backpack' was just a metaphor. The technical name is, lexical scope. 

that is what it means when we say Javascript is lexically or statically-scoped. 
Our lexical scope, which is the function's  availability of  live data, IS WHERE our function was defined (not invoked). 

This is what determines our available variables and prioritization at function execution, not where our function is called/invoked.  

IN OTHER WORDS and THIS BEARS REPEATING: 

lexical means the position of my function definition. Not where it gets invoked. is what ultimately determines what data is available to me when my function does get invoked. 

the number of ways to describe 'backpack' are:

- lexical scope reference
- closed over variable environment, C.O.V.E., where the relevent variables were pulled out.
- Closure 


**/



