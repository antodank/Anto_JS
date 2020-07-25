
console.log(x); // declared in global context means undefined
var x = 10;
console.log(x); // x  is initialized

//console.log(y); //Uncaught ReferenceError: y is not declared in global context

var a = "Hello World";

function b()
{ 
    var y = "Hello";
    return "I am in b()";
}

console.log(a);
console.log(b());

//Hoisting is a JavaScript mechanism where variables and function declarations 
//are moved to the top of their scope before code execution.

// all variables are initially undefined

//initialisations are not hoisted.