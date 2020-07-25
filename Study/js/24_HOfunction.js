// higher order function - Higher-order functions are functions that 
//take other functions as arguments or return functions as their results

//functions as argument
const sing = (callback) =>
{
    console.log("Singing....");
    if(callback instanceof Function)
        callback();
};

const song1 = (s) => console.log("la la la");
sing(song1);

sing(s=> console.log("tan tan tan"));

// functions as arguments and parameters 
const fetchItems = (callback, ...params) => {
    callback(params);
}

fetchItems((res) => console.log(res), 'ina', 'mina','dika',100);

// return functions as their results
const addAdjective = (string) => 
{
   return (name) => name + ' ' +string;
        
};

var sentense = addAdjective("is cool programmer."); //here function returns function
console.log(sentense("Ankit"));

const double = n => n * 2; // double is function
[1, 2, 3, 4].map(double).forEach( x => console.log(x)); // passed to map function a argument