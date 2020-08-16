function whoThis () {
    this.trickyish = true
  }
  
  whoThis();

  const car = {
    numberOfDoors: 4,
    drive: function () {
       console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
    }
  };

  car.drive();
  
  const letsRoll = car.drive;
  
  letsRoll();


  const dictionary = {
    car: 'automobile',
    apple: 'healthy snack',
    cat: 'cute furry animal',
    dog: 'best friend'
  };


  console.log(Object.keys(dictionary));
  console.log(Object.values(dictionary));