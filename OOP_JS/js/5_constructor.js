
//a function becomes a 'constructor' when it is being called with the new Operator

//A function with an empty return or without it returns undefined

function citylight(name,special)
{
    console.log(`${name}'s speciality is ${special}.`);
}

function City(name, population) {
    console.log("In Constructor");
    this.name = name;
    this.population = population;
  
    this.identify = function () {
      console.log(`${this.name}'s population is ${this.population}.`);
    };

  }

  let newcity = new City("Mumbai","8M")
  newcity.identify();
 
  console.log("constructor call");
  console.log(newcity);
  console.log("function call");
  console.log(City("Pune","5M")); // undefined
  console.log(citylight("Agra","TajMahal")); // undefined
  