var arr1 = "john".split('');
var arr2 = arr1.reverse(); 
//arr1 will also affect since arr1 and arr2 are simply references to the same object.
var arr3 = "jones".split('');
// arr2.push(arr3);

console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2"); // +"2" is unary operator converts to 2
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2"); 
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2); // aything with NaN is NaN

console.log(typeof undefined == typeof NULL);

let myArray = ['a', 'b', 'c', 'd'];
myArray = ['start', ...myArray, 'end'];
// add element at end or begining

// clone the object
var obj = {a: 1 ,b: 2}
var objclone = Object.assign({},obj);

console.log(objclone);

// for (let i = 0; i < 5; i++) {
//     setTimeout(function() { console.log(i); }, i * 1000 );
//   }

  for (let i = 0; i < 5; i++) {
    (function(){ console.log(i); })() ;
  }