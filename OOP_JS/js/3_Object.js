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

  const person = {
    firstName: 'An',
    lastName: 'To',
    bloodGroup : 'A-'
  };

Object.keys(person).forEach((key) => { console.log(key)});

Object.values(person).forEach((value) => { console.log(value)});

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});