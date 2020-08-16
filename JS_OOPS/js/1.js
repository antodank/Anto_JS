// object
const Circle = {
    radius : 10,
    pi : 3.14,
    getname : function(){
        console.log("Circle1");
    },

    area : function(){
        return this.pi * this.radius * this.radius;
    }
}

Circle.getname();
console.log(Circle.area());

// factory function
function getCircle(radius)
{
    return {
        radius,
        pi : 3.14,
        getname : function(){
            console.log("Circle2");
        },
        area : function()
        {
            return this.pi * this.radius * this.radius
        }
    }
}


const circle1 = getCircle(20);

console.log(circle1);

// constructor function
function Circle2(radius)
{
    this.radius = radius;
    this.pi = 3.14;
    this.getname = function()
    {
        console.log("Circle3");
    }
}

const c2  = new Circle2(25);
console.log(c2);