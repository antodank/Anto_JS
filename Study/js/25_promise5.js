const addString = (previous,current) => {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
                resolve(previous + "-" + current);
        }, 2000);
    })
}


const printAll = async () => {
   let newstring = await addString("","1001")
   newstring = await addString(newstring,"1002")
   newstring = await addString(newstring,"1003")
   return newstring;
}

console.log(printAll().then((msg)=> console.log(msg)));