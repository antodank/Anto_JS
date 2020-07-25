var arr = [2, 5, 6, 3, 8, 9]; 
   
// val - cuurent element value
//index - index of current element
var newArr = arr.map((val, index) => { 
    return {key:index, value:val*val}; 
});

console.log(newArr);

const map1 = arr.map(x => x * 2);

console.log(map1);

//randomly fill no between 0 to 100
const map2 = Array(10).fill().map(x => Math.floor(Math.random() * 100))

console.log(map2);
          
