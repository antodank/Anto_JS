function arrays()
{
    console.clear()
    const a = [1, 2, 3]
    const b = Array.of(1, 2, 3)

    for(let i = 0;i < a.length; i++)
    {
        console.log(" a["+ i +"] = " + a[i])
    }

    const matrix = [
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9]
                    ]
    console.log("[0][2]" + matrix[0][2]) //3
    console.log("[2][0]" + matrix[2][0]) //7

    //nested array
    const ab = [1, 'Flavio', ['a', 'b'],["Hello","Bye"]]
    console.log("[2][0]" + ab[3][1] ) //Bye

    let arr1 = Array(10).fill(0)
    console.log("arr1 length - " + arr1.length)
    arr1.push(20)
    console.log("arr1 push - " + arr1[arr1.length - 1])
    arr1.shift() //remove an item from the beginning of an array
    console.log("arr1 shift - " + arr1[arr1.length - 1])
    arr1.pop() //remove an item from the end of an array
    console.log("arr1 pop - " + arr1[arr1.length - 1])
    
    //find
    //Returns the first item that returns true, 
    //and returns undefined if the element is not found.
    var arr2 = [10, 20, 30, 40, 50]; 
    let element1 = arr2.find(function(x) { return x > 30; });
    console.log(" find " + element1 )

    //findIndex
    //Returns index of the first item that returns true, 
    let element2 = arr2.findIndex(function(x) { return x > 30; });
    console.log(" find " + element2 )

    //values It returns a new array iterator object
    var iterator = arr2.values()
    for(let x of iterator)
    {
        console.log(x);
    }

    // every() - method tests whether all elements in the array pass the test 

    // some() - tests whether at least one element in the array passes the test 

    //Incudes - Returns true if a contains value.
    let boolitem = arr2.includes(30)

    //foreach
    arr3 = new Array(arr2.length);
    arr2.forEach(function(num,i){
        arr3[i] = num * i;
    })

    var names = ['Arpan', 'Abhishek', 'GeeksforGeeks']; 
    names.forEach(function(name){ 
        console.log(name); 
    }); 

    //Array.concat() function is used to merge two or more arrays together.
    var arr4 = arr2.concat(arr3);  
    //Array.join() function is used to join the elements of the array together into a string
    var valjoin = arr4.join('-');
    console.log(valjoin);

}

arrays();