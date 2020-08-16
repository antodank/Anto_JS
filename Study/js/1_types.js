//---- primitive types
// string 
// number 
// Boolean
// undefined
// null
// Symbol

//---- object types

let obj1 = {};

let person = {
name : "Ankit",
height : {
    nose : 2,
    leg : 12
}
};


// --- falsy values
// undefine
// null
// 0
// false
// ''
// NaN
obj1 = null;
var x;

if(obj1) // null
    console.log("I am true");
else
    console.log("I am false");

if(x) //undefined
    console.log("I am true");
else
    console.log("I am false");

if(Boolean(NaN) === Boolean(NaN)) //NaN == NaN will return false so conversion is necessary
    console.log("I am true");
else
    console.log("I am false");


    // sometimes  avoid direct comparison 
    // use conversion
    // always use ===
