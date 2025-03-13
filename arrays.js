//Arrays  -> list of values [any datatype] enclosed by a square bracket

//1.The array constructor
const fruits = new Array()
console.log(fruits)

const user = {
    name: "John Doe",
    address: {
        county: "Nairobi",
        subCounty: "Ngong"
    }
}

console.log(user.address.county)
console.log(user['address']['subCounty'])

//2.Use the square brackets -> the most common
const students = ['Paul', 'James', 'Sharon',['red', 'green', { colorName: 'blue' }]]
console.log(students)

//Accessing values inside an array
//we use index-position of an element in the aeeay
// ! The index always start at 0
console.log(students[3][2]['colorName'])

//adding
students[4] = 'Trevor'

//Updating
students[0] = 'Jeff'

//deleting
delete students[3]

console.log(students)

//Array methods -> mutating array methods
const colors = ['red','black']
console.log(colors)


/**
 * Adding elemnts
 */
//1. .push() -> add one or more elements at the endof an array
colors.push('green', 'purple', 'mlue')
console.log(colors)

//2. .unshift() -> add one or more elements at the beginneing of an array
colors.unshift('yellow', 'white')
console.log(colors)

/**
 * Remining
 */

//1. .pop
const deletedColor = colors.pop()
console.log(colors)


//2. .shift
colors.shift()
console.log(colors)