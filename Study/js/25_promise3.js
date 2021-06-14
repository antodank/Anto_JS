let p1 = new promise((resolve, reject) => 
{
    resolve(1);
})

let p2 = new promise((resolve, reject) => 
{
    reject(2);
})


let p3 = new promise((resolve, reject) => 
{
    reject(3);
})

Promise.all([p1,p2,p3]).then((msg) =>{
    console.log(msg);
})

Promise.race([p1,p2,p3]).then((msg) =>{
    console.log(msg);
})