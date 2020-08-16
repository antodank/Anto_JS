const car1 = {
    hasAC: true
  };
  const car2 = {
    hasMusicSystem: true
  };
  const car3 = {
    gears: 5,
    wheels: 'Alloy'
  };
  
const car4 = Object.assign(car1, car2, car3);

const car5 = car1;

console.log(car5);
console.log(car4);
console.log(car1);
console.log(car2);
console.log(car3);

car1.gears = 6;
console.log(car4);
console.log(car5);

