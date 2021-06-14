//let arr = [4, 2, 5, 1, 3];
let arr = ["z", "C", "a", "m", "B"];
//let arr = [44, 20, 98, 100, 12];

console.log("Before Sort - " + arr);
arr.sort();
console.log("after Sort - " + arr);
// after comparer function
arr.sort((a,b) => a- b);

//sorting strings with non-ASCII characters 
arr.sort((a, b) => a.localeCompare(b));
console.log(arr);

var homes = [
    {
        "h_id": "3",
        "city": "Dallas",
        "price": "162500"
    }, {
        "h_id": "4",
        "city": "Bevery Hills",
        "price": "319250"
    }, {
        "h_id": "5",
        "city": "New York",
        "price": "962500"
    }
];

homes.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price); 
    // a-b For ascending  order
    // b-a For descending order
});