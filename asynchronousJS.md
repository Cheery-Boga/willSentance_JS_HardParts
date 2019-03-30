/**

console.log("I am at the beginning of the code.");

const insideFunc = () => {
  console.log(`I am in the setTimeout callback function after 3 seconds`); 
}; 


setTimeout(insideFunc, 3000); 

console.log(`I am at the end of the code`); 



a few js built-in functions, like setTimeout(), don't create a new local execution context inside JS. It actually goes outside the JS world and it communicates with "Web's built-in API" or "Features". 

for example: setTimeout(sayHelloFunc, 3000); 

this sets up a timer. The timer also has 3000ms in its local, memory and the callback function, which it will execute after the 3 seconds. 

As soon as the timer and the function is set up, the "features" pushes the callback function into something called, "the callback queue". This queue has an "event loop" that periodically checks JS's callstack to find out when the callstack is clear (including all the function-returns from the global memory). 

As soon as it's clear, that's when "the callback queue" pushes the callback that arrived with setTimeout to JS's callstack; at which point, it goes thru the JS engine's thread of execution. 
**/


/**

this following statement is similar to a one-liner like the setTimeout(). The difference is that it's neither a Web API / features built-in function in the browser, nor a JS. It's part of the Jquery libary. 

$.get("http://www.twitter.com/userHandle/tweet", display); 
we pass it a string, which is a URL. This is what's also knowns as an API address.
You're also passing it a function definition.

the $.get speaks to the Web browser's API / feature called, xmlHttpRequest. (it's XHR for short).

xmlHttpRequest takes in two parameters: the API address and a reference to the function. As soon as it sets up the local memory with the address to which to get data, the .get method and the specific, userHandle to fetch. It also has a local variable to determine if it's complete.

Once the XHR (short for xmlHttpRequest) completes fetching the required data, it checks of the request as "Done". 

while the function to execute is in the callback queue, the event loop waits until the callstack is done, too, and immediately pushes the function on to the callstack and JS runs it as usual. 

https://frontendmasters.com/courses/javascript-hard-parts/xmlhttprequest/

