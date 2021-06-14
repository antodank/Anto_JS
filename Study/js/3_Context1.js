var myObject = {
    item: "ball",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.item);
        console.log("outer func:  self.foo = " + self.item);
        //IIFE
        (function() {
            console.log("inner func:  this.foo = " + this.item);
            console.log("inner func:  self.foo = " + self.item);
        }());
    }
};
//myObject.func();

// myFunction is in global scope
var myFunction = function () {
    var name = 'Todankar'; // in local scope
    console.log(name); // Todd
  };

  //myFunction(); // will work
  // Uncaught ReferenceError: name is not defined
  //console.log(name);


  var myFunction = function () {
    // Scope B
    var name = 'Todd'; // defined in Scope B
    var myOtherFunction = function () {
      // Scope C: `name` is accessible here!
    };
  };