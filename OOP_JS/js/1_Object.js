
//Defining object 
let person = { 
    first_name:'Ankit', 
    last_name: 'Todankar',
     //object within object 
     phone_number : { 
        mobile:'12345', 
        landline:'6789'
    },

    Qualification : ["B.Sc.","M.A. (History)"],

    //method 
    getName : function(){ 
        return (`The name of the person is  
          ${person.first_name} ${person.last_name}`) 
    }


}

let person1 = Object.create(person);
person1.first_name = "ABC";
person1.last_name = "XYZ";
//person = person1;

//let person2 = new person(); // TypeError - person is not a constructor


console.log(person.getName());  
console.log(person.phone_number.landline); 

console.log(person1.getName());  

//console.log(person2.getName());  