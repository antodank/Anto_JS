var myObject = {
    item: "ball",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.item);
        console.log("outer func:  self.foo = " + self.item);
        (function() {
            console.log("inner func:  this.foo = " + this.item);
            console.log("inner func:  self.foo = " + self.item);
        }());
    }
};
myObject.func();
