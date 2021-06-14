let cars = [
    {
      color: "white",
      type: "sedan",
      name: "Hyundai Aura",
      registration: new Date('2017-01-03'),
      capacity: 5
    },
    {
      color: "red",
      type: "mini",
      name: "Maruti Wagnor",
      registration: new Date('2019-03-03'),
      capacity: 5
    },
    {
        color: "green",
        type: "SUV",
        name: "Tata Nexon",
        registration: new Date('2018-03-03'),
        capacity: 5
    },
    {
        color: "Opulent Purple",
        type: "SUV",
        name: "Mahindra XUV 500",
        registration: new Date('2019-06-03'),
        capacity: 7
    },
    {
        color: "Blade Sliver",
        type: "Sedan",
        name: "Nissan Magnite",
        registration: new Date('2020-07-04'),
        capacity: 5
    }
  ]


//   let car = {
//     color: "Blade Black",
//     type: "Mini",
//     name: "Hyundai i10",
//     registration: new Date('2020-07-07'),
//     capacity: 5
// }

// console.log("after push")
// cars.push(car);
//console.log(cars);

// Array.splice(
//     {index where to start},
//     {how many items to remove},
//     {items to add}
//   );

// let car2 = {
//     color: "Blue ",
//     type: "Mini",
//     name: "Hyundai i20",
//     registration: new Date('2021-01-07'),
//     capacity: 5
// }

// cars.splice(3,1,car2);
// console.log("splice cars");
// console.log(cars);


// let carsize = cars.map( car => car.name + "-"+ car.type);
// console.log(carsize);

console.log("Sorted by date")
cars.sort(function(cara, carb) {
    return cara.registration - carb.registration;
});

console.log(cars)

/* 
.map() returns a new Array of objects by taking some action on each item

.every() returns a boolean - true if every element in this array satisfies the provided testing
                            stops looping if found something falsy

.forEach() returns nothing - It just iterates the Array 

.reduce() -  iterates the Array  and then reduce the array to a single value.

.filter() - returns  a new array including elements where the filter function returns true

.some - stops looping if found something truthy
*/