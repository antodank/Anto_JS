//let number = 10;

let obj = { value : 10 }

/* function increase(number)
{
    number++;
} */

function increase(obj)
{
    obj.value++;
}

increase(obj);
console.log(obj.value);