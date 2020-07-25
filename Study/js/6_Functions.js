const name  = "Ankit Todankar";
let weight  = 70;


function printMyInfo(usrname, usrwgt)
{
    return ("Hello Team, " + 
        "Myself " + usrname + 
        " and my weight is " + usrwgt);
}

const printMyInfoNew = function (usrname, usrwgt){
    return ("Hello Team, " + 
    "Myself " + usrname + 
    " and my weight is " + usrwgt);
}


console.log(printMyInfo(name,weight));
console.log(printMyInfoNew(name,weight));

//THERE IS NO OVERLOADING IN JAVASCRIPT.
function add(x, y) {
    return x + y;
  }
  
console.log(add(1, 2, 3, 4, 5)); // returns 3
