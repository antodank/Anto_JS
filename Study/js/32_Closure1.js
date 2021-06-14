/* closure usage
*/


// for (var i = 1; i <= 3; i++) {
//     setTimeout(function() { console.log(i); }, 1000 * i);
//   }


// functions resturning two functions
function counter() {
    let _counter = 0;
    // return an object with several functions that allow you
    // to modify the private _counter variable
    return {
      add: function(increment) { _counter += increment; },
      retrieve: function() { return 'The counter is currently at: ' + _counter; }
    }
  }

var funcCounter = counter();
funcCounter.add(5); 
//console.log(_counter);  // Uncaught ReferenceError: name is not defined
// console.log(funcCounter._counter); // value is undefied if we try to access the variable
funcCounter.add(10); 

console.log(funcCounter.retrieve());

// x defined in outer scope accessed in the methods increment, decrement, get and reset. count()
function counter() {
    var x = 0;
    return {
      increment: function() { ++x; },
      decrement: function() { --x; },
      get: function() { return x; },
      reset: function() { x = 0; }
    }
  }

  const checkCount = counter();

  checkCount.increment();

  console.log(checkCount.get());
