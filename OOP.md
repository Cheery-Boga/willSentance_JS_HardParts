https://repl.it/@MarthaChiriboga/simpleObject

OOP - an enormously popular paradigm for structuring complex code. 
    - Easy to add features and functionality
    - Perfomant (efficient in terms of memory)
    - easy for us and other developers to reason about, because it provides a clear structure.
    
    (aside: memoize remembers when the last time a function was invoked)
    
    writing objects will store functions with their associated data
    "encapsulaton" - binding together the  data and functions, which manipulate said data.
    
    let user1 = {
      name: "MorningStar",
      score: 10,
      increment: function(){
        this.score++; 
        }
    }; 
    
    let a = user1.increment(); 
    console.log(user1.score); 
    
    """"""""""  """""""""""
         the paramater is assigned the argument value, "MorningStar". <<<PROPER WAY to describe this action >>
          
    """"""""""  """""""""""
    
    function userCreator(name, score){
      let newUser = {};  //you can also use: let newUser = Object.create(null); 
      newUser.name = name; 
      newUser.score = score; 
      newUser.increment = function(){
        newUser.score++; 
      }
      return newUser; 
    }
    
    let user1 = userCreator("Will", 3); 
    let user2 = userCreator("MorningStar", 5); 
    
    SECOND Example:

const makePerson = (name, age) => {
	let newPerson = Object.create(null); 
  newPerson.name = name; 
  newPerson.age = age; 
  return newPerson; 
	}
	


var vicky = makePerson('Vicky', 24);
console.log(vicky.name); // >> "Vicky"
console.log(vicky.age);  // >> 24
    
    The problem with creating this type of empty object and populating it with a new user and score data, is that every time we're consuming our computer's memory for what appears to be copies of the same function; in particular, the increment Func.
    
    is there a better way? 
    
    Yes, there is! Simply store the increment function in its own object. So, when the interpreter doesn't find that "increment method" (function) in user1 or user2...it will look up the prototype-chain (not the global scope) to find that method. This is the prototypical nature of JS. 
    
    ?????????????????? ASIDE: during a tech interview, how do you spot a senior JS developer? Ask them to rebuild how the "new" keyword and how "classes" are actually working. this is a CLASSIC question!
    
    