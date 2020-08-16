class Animals {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }

    speak() {
        return `${this.name} can speak`;
    }

    run() {
        return `${this.name} can run`;
    }
}

let animal1 = new Animals("Dog","abc");

console.log(animal1.name);

class Dog extends Animals {

    constructor(name,species,foodHabbit)
    {
        super(name,species);
        this.foodHabbit = foodHabbit;
    }

    eating(){
        return `${this.name} is a ${this.foodHabbit}`;
    }

}

let newDog = new Dog("puppy","foreign","omnivore")

console.log(newDog.eating());