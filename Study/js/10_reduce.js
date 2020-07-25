/* 
The reduce() method is used to apply a function to each element in the array to reduce the array to a single value.
accumulator — the accumulator accumulates all of the callbacks returned values.
val — the current value being processed
index — the current index of the value being processed
arr — the original array 

array.reduce((accumulator, val, index, arr)

*/

const marks = [78,52,68,82,60,56];

const sum = marks.reduce((total, mrk) => total + mrk); 

const avg = marks.reduce((total, mrk,index,array) => {
    total += mrk;
    if( index === array.length-1) { 
        return total/array.length;
      }else { 
        return total;
      }
},0); 

//The initial value is the value of the total parameter when the reduction starts.

const euros = [29.70, 41.80, 46.50,35.10,12.40]; //166.5 & 33.10

const sumofeuros = euros.reduce((total, mrk) => total + mrk,0); 

const avgofeuros = euros.reduce((total, amount, index, array) => {
    total += amount
  },0);



//console.log(sum);
//console.log(avg);

//console.log(sumofeuros);
// console.log(avgofeuros);


const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const fruitCount = fruitBasket.reduce( (tally, fruit) => {
    console.log(fruit);
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {});

const fruitCountnew = fruitBasket.reduce((tally, fruit) => {
  if (!tally[fruit]) {
    tally[fruit] = 1;
  } else {
    tally[fruit] = tally[fruit] + 1;
  }
  return tally;
}, {});

// console.log(fruitCount);
// console.log(fruitCountnew);

//------------
// mad to reduce
// const numbers = [1, 10, 100]
// const squared = numbers.map(item => Math.pow(item, 2))

const numset1 = [1, 10, 100]
const squared = numset1.reduce((acc, number) => {
  acc.push(Math.pow(number, 2))
  return acc
}, [])

// console.log(squared);

//----------------
//filter to reduce
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const evenNumbers = numbers.filter(number => number % 2 === 0)

const numset2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numset2.reduce((acc, number) => {
  if (number % 2 == 0) {
    acc.push(number)
  }
  return acc
}, [])

// console.log(evenNumbers);


const colorData = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];

//get unique colors 
const colors = colorData.reduce((total, amount) => {
  amount.c.forEach( color => {
    if (!total.includes(color)){
      total.push(color);
    }
  })
  return total;
}, [])

console.log(colors);