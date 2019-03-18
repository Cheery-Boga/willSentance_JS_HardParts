the way that JS is interpreted in Chrome is via something called, Just in Time (JIT) compilation. It does very smart things to optimize which bits of codes get assigned memory first at 'run time'.

whatever is on top of the callstack, is where the thread of execution. 
callstack is a data structure that holds info. Last-in/First-out (LIFO). it tracks which local execution context we're in. 

if you don't return anything from a function, the default value is set to undefined.

pushing and popping are the terms to add/remove unto the callstack.
variable environment is the technical name for the local memory that gets created, when a function is called/invoked. It's live data stored in local memory.

use 'const' replaced var. Use 'let' when you're going to re-assing variables, in the future. 

whenever you invoke a function, it ALWAYS starts a brand-new, local execution context (variable environment)

going deep in your understanding of JS...going under the hood of the language is NOT for theoritical purposes. It's NOT for our intellectual curiosity. We do it, because it makes debugging, writting clean and communicating what we're doing much, much more possible. 

Burgeoning interest has come around this paradigm called, Functional programming. (as opposed to Object-Oriented programming).

Functional progamming core features:
Functions are first-class citizens. 
1. Pure functions (no side effects). if you call a functions, you don't change other parts of the program. It's only consequence is whatever is returned. It's not mutating anything in the global execution context. 

2. 'Higher order functions' - highly valuable tool. You can not only put a placeholder for your variables, at run time, but you can ALSO determine what functionality you want that function to perform at run time. 

PAIR PROGRAMMING

build projects
MIT courseware and all its problem sets
all those mukes; corsera, edX

The moment when you're faced with a problem and you want to run away and procrastinate, but you push-thru is when you grow as a developer.
