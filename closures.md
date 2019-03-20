When our function gets called, we create a live store of data (AKA, local memory/variable environment/state) for that function's execution context. 

When the function finishes executing, its local memory is deleted (garbage-collected), except for the returned value.

But what if our functions could hold on to live data/state between executions? 

This would let our function definitions have an associated cache/persistent memory!

In Closures, it all starts with a function returning another function. 

sideNote: See the Closure Recipe from Bianca Gandolfo's Frontend Masters course on your GitHub.

