/**
 * objects -> non primitive
 * collection data with key/value pairs (properties)
 * 
 * we use curly brackets  -> {}
 */

const car = {
    engine: 'v8'
    color: 'black'
    seatCapacity: '4'
    owner: {
        firstName: 'David'
        phone: "0790561911"
        //special keys
        ["full name"]: "David Kiptum"
    }
    previous owner: ['Tony']
}
const firstName = "John"
console.log(firstname)

//Accessing values inside an object
//1. dot notation (.) ->this is the most common
console.log(car.owner.firstName)

//2.square bracket notation([]) -> dynamically access values 
//They also come inhandy when dealing with special keys
console.log(car['owner']['firstName'])
console.log(car['owner']['fullName'])const student = {
    name: "Brian Bett"
    age: "29"
    gender: "male"
    class {
        cohort: 'SDF-FT13'
        name: 'Web 9'
        tm: {
            yearsOfExp: 2
            classModule: 'SD'
        }
    }
}

console.log(student.class.tm.name)
console.log(student['tm']['yearsOfExp'])

//functions + recurssion
//add more properties
student.age = 30
console.log(student.age)

//delete properties
delete student.age
console.log(student.age)

//Objects methods
//Object.keys() ->

