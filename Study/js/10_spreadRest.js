let arr1 = [2,4,6,8];

let arr2 = [3,6,9,12];

let arr3 = arr1.concat(arr2);


console.log(arr3);

//copying array into new object
let arr4 = [...arr1];
console.log(arr4);

function add(x, y) {
    return x + y;
  }
  
console.log(add(1, 2, 3, 4, 5)); // returns 3

function spreadAdd(...args) {
    let result  = 0;
    args.forEach(x => result += x);
    return result;
  }

  console.log(spreadAdd(50,100,200,250));