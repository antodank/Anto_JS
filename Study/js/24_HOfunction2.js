
var students = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isBoy = x => x.sex === 'M'

let isGirl = x => x.sex === "F"

let getBoys = students => ( students.filter(isBoy) )

let getGirls = students => ( students.filter(isGirl) )

let studentAvg = students => ( students.reduce((acc,curr) =>
                            ( acc + curr.grade) ,0) / students.length
                            )

let maxGrade = students => (
    Math.max(...students.map(x => x.grade))
)

let classroomAverage = studentAvg(students) // 10.2
let boysAverage = studentAvg(getBoys(students)) // 7
let girlsAverage = studentAvg(getGirls(students)) // 13.4

let classroomMax = maxGrade(students) 
let boysMax = maxGrade(getBoys(students))
let girlsMax = maxGrade(getGirls(students)) 

console.log(classroomAverage)
console.log(boysAverage)
console.log(girlsAverage)

console.log(classroomMax)
console.log(boysMax)
console.log(girlsMax)