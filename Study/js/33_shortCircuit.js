

var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';

var f = a || b || c || d || e;

console.log(f);

var students = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F', verified : true},
    {name: 'Ram', grade: null, sex: undefined, verified : true}
];


;
if(students.some( x=> x.name == "Ram"))
{
let eRam = students.find( x=> x.name == "Ram");
//null
console.log( eRam.grade || "0");

// undfined
console.log( eRam.sex || "Unknown");

// unknown property
console.log( eRam.lastname || "Unknown");

console.log( eRam.name || "Unknown");

console.log( (eRam.verified && eRam.name) || "Unknown");

console.log( (eRam.verified && eRam.grade) || "0");

}





