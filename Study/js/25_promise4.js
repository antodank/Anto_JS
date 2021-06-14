const printMessage = (message) => {
    return new Promise((resolve,reject) =>  
    {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 2000);
    })
}

//nested and messy
const printCoffee = () => printMessage("Add coffee powder").then(() =>{
    return printMessage("Add milk").then(()=>{
        return printMessage("Add Sugar").then(()=>{
            return printMessage("Coffee ready.");
        })
    })
})

// clean
const printCoffeeClean = () => {
    printMessage("Add coffee powder")
    .then(() => printMessage("Add milk"))
    .then(() => printMessage("Add Sugar"))
    .then(() => printMessage("Coffee ready."))
  }

//printCoffee();
printCoffeeClean();

const printAsyncCoffee = async () =>{
    await printMessage("Add coffee powder")
    await printMessage("Add milk")
    await printMessage("Add Sugar")
    await printMessage("Coffee ready.")
    
}

//printAsyncCoffee();