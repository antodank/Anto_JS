var x = 1;

function a()
{
    var x  = 2;
    console.log("a ->" + x);
    b();
    d();
    function d()
    {
        console.log("d ->" + x);
    }
}

function b()
{
    var x;
    console.log("b ->" + x);
    c();
}

function c()
{
    console.log("c ->" +x); // refer to lexical environment 
    // value will be one since function is declared in global context
}

console.log(x);
a();