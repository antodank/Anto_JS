const person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    DOJ : '1995-01-01',
    getAge: () =>{
            return 25;
    }
};

// Deep Copy Objects
// using spread ...
let p1 = {
    ...person
};

console.log(p1);

// using  Object.assign() method
let p2 = Object.assign({}, person);
console.log(p2);

// using JSON
let p3 = JSON.parse(JSON.stringify(person));
console.log(p3);

console.log(`hasOwnProperty  - ${person.hasOwnProperty('lastName')}`);
console.log(`hasOwnProperty  - ${person.hasOwnProperty('city')}`);
console.log(`hasOwnProperty  - ${person.hasOwnProperty('toString')}`);


// in operator - check if a property exists in both own properties and inherited properties of an object.
console.log(`in operator  - ${'lastName' in person}`);
console.log(`in operator  - ${'city' in person}`);
console.log(`in operator  - ${'toString' in person}`); 
