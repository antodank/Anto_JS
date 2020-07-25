function sum(a,b)
{
    return a + b;
}

let sumArrow = () => a + b; 

function isEven(num)
{
    return num % 2 == 0 ? true :  false;
}

// single parameter function can be written without paranthesis 
let isEvenArrow = (num) => num % 2 == 0 ? true :  false;

function randomNumber()
{
    return Math.random;
}

// if no parameter then paranthesis complusary 
let randomNumberArrow = () => Math.random;


document.addEventListener('click', function()
{
    console.log("Clicked");
}) 

console.log(sumArrow(10,20));
console.log(isEvenArrow(100));
console.log(randomNumberArrow());
