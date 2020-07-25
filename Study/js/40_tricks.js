function checkVal()
{
    var x = y = 10;
    console.log(typeof x);
    console.log(typeof y);
}
checkVal();

let x1 = 5;

function cool()
{
    let x1;
    x1 = 3;
    function hot()
    {
        let x1= 0;
        x1++;
        console.log("hot " + x1);
    }
    
    console.log("cool " + x1);//3
    hot(); //1
}

console.log(cool());

function isInteger(x) { 
    return (typeof x === 'number') && (x % 1 === 0); 
}

function isInteger1(x) { 
    return (x ^ 0) === x; 
} 

console.log(isInteger(25.00));
console.log(isInteger1(25.00));

console.log(isInteger(25.50)); // false
console.log(isInteger1(25.50)); // false

console.log(isInteger('25'));
console.log(isInteger1('25'));

function foo()
{
    return {
        name:"OLA"
    }
}

function foo1()
{
    return
    {
        name:"OLA"
    }
}// return undefined

console.log(foo());
console.log(foo1());

let a = 0.1 + 0.3;
console.log(a);

let d = {};
[ 'zebra', 'horse','lion' ].forEach(function(k) {
	d[k] = undefined;
});
console.log(d);

let bar = {};
bar = null;
console.log((bar !== null) && (typeof bar === "object")); 