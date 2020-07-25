'use strict'; //global

//-- throw errors - strict mode removes certain JavaScript silent errors.

//mistypeVariable = 17;  
// Uncaught ReferenceError: mistypeVariable is not defined

// var undefined = 5;             // throws error
// var Infinity = 5;              // throws error

function strictFunc() {
    // Function using strict mode syntax
    //'use strict';
    function insideFunc() {
       return 'is nested function';
    }
    return " This is function is in strict mode context and so is " + nested();
  }

//-- Assignment to a non-writable property

var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
//obj1.x = 9;                    // throws a TypeError

//-- Assignment to a getter-only property

var obj2 = { get x() { return 17; } };
//obj2.x = 5;                   // throws a TypeError



//-- restrict duplicate argument

// const foo = (val1, val2,val1) =>
// {
//     console.log(val1);
// }
//duplicate parameter name not allowed in this context

//== makes eval() safer. 
eval ("var x = 2");
//alert (x);  // throw error declaration is not allowed

const func1 = () =>{
    return this;
}

//---- this keywords works differently
// if strict mode is off then it will return windows object else will retun undefined
console.log(func1());
 
