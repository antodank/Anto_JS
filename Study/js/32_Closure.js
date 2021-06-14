//closure
/* a closure give you access to an outer function’s scope from an inner function outside of its original usage.
A closure is a way to access and manipulate external variables from within a function.

*/

function add (a) {
    return function (b) {
      return a + b
    };
  }

  let add1 = add(10);
  let add2 = add1(20);

  console.log(add2);

  var employeeList = [
      { id: 1001, name : "Ankit", salary: 12000},
      { id: 1002, name : "Viraj", salary: 10000},
      { id: 1003, name : "Sachin", salary: 15000},
      { id: 1004, name : "Raj", salary: 8000}
  ]

  const getHigherSalary = (num) => {
    return employeeList.filter( emp => emp.salary > num)
  }


  console.log(getHigherSalary(10000));


const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 2000);

  console.log("I am out");
}


/*
output  - four times - Index: 4, element: undefined
the setTimeout function creates a function (the closure) that has access to its outer scope, which is the loop that contains the index i.
till setTimeout completes its execution by the time outer for loop is completed and reah to the value i = 4  
*/