
// async will return promise function so we can use then and catch along with it
// async function performs all task and reach to return stmt, then then block is executed
// async function thows function then catch block executed

const getData = async () => {

    console.log("I am doing something...");
    //return "Done.";
    throw "Too much";
    
};

let response  = getData().then((msg) => console.log("Completed." + msg) )
                        .catch(() => console.log("Error"));

// async await

const newgetData = async() =>
{
 const promise1 = new Promise((resolve,reject) =>
 {
  setTimeout( () => resolve("2 sec passed"),2000);
 });

 let result = await promise1;

 console.log(result);

}

newgetData();
console.log("I am Done");