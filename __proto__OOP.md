Note: These notes will make sense after the OOP markdown.

the way to bind a __proto__ to any of your objects is to include it, when using the "Objects.create()" method in your Higher-Order function. See coding snippet:


https://repl.it/@MarthaChiriboga/protocodingbinding

the __proto__ is included with whatever is placed inside 'Objects.create()' parenthesis. This "bond" is created with an object above it, whenever the JS interpreter looks for a method (object property) not found inside said object.It knows to check for it thru its prototypal nature. 

you can only have ONE __proto__ function with each child. 

a little known fact is that when one creates a local execution context / V.E., it will automatically create a this: variable in its memory, along with the variables, and other placeholders. 

the fundamental rule in JS is that the "this" keyword will refer to whatever is to the left of the dot that created the V.E./ local execution context. 

""""""""""""""
let newUser = Object.create(userFunctionStore); 

THE PROPER way of saying that statement is: 

declare newUser and assign it an empty object with userFunctionStore set as the object that is one step up the prototype chain.  
but, technically, you should say, "declare newUser and assign it an empty object with userFunctionStore, as newUser's prototype. (we all know it's not really prototype, but rather dunder_score proto, but YES, technically, it is that object's (newUser's) prototype. BUT don't confuse it with a property called, "prototype". 