const myPromise = new Promise((resolve, reject) => {  
    // condition
});


const newPromise = new Promise((resolve,reject) => {
    // statment
    console.log("doing my job.");
    resolve("Done");
    //reject("Error");
   });
    
newPromise.then((msg) => {
       //resolve statement 
       console.log(msg);
   }).catch((msg) => {
       //reject statement
       console.log(msg);
   }).finally(() =>{
       // finally what should run
       console.log("Finally done.")
   });



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let promis1 = new Promise((resolve,reject)=>{
    if(getRandomInt(1,100) % 2 === 0)
    {
        console.log("resolved");
        resolve({ id : 10, name : "Ankit"});
    }
    else
    {
        console.log("rejected");
        resolve({"Exception" : "error"});
    }
})
.then((v) => { 
    console.log(v); })
.catch((e) => { 
    console.log(e); })


function sleep(milliseconds) {
    var start = Date.now();
    while ((Date.now() - start) < milliseconds);
}


const prom = new Promise((resolve,reject) =>
{
    sleep(3000);
    let  sec = new Date().getSeconds();
    if(sec % 2 == 0)
    {
        resolve({ seconds : sec, message : "Success"});
    }
    else{
        reject({ seconds : sec, message :'Fail'});
    }

});

console.log("Code Start");
prom.then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.log(msg);
}) ;

console.log("Code end");

var chainpromise = new Promise(resolve =>{
    resolve(1);
    Promise.resolve().then(() => console.log(2));
    console.log(4)
  });
  
  chainpromise.then(t => console.log(t));
  console.log(3);

