// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: 
// Create a function named boiling
// Input boilingPoint
// Within the function, create conditional statements
// String interprolate boilingPoint to return the value inputed
// If value is less than 212, return below boiling point
// If value is greater than 212, return above boiling point
// If value is equal to 212, return at boiling point
// If other is given, return an error message

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const boiling = (boilingPoint) => {
if (boilingPoint < 212) {
    return `${boilingPoint} is below boiling point`
} else if (boilingPoint > 212) {
    return `${boilingPoint} is above boiling point`
} else if (boilingPoint === 212) {
    return (`${boilingPoint} is at boiling point`)
} else return "please enter a numeric value"
}

console.log(boiling(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// Combine the padres1984WorldSeriesRuns and padres1998WorldSeriesRuns arrays
// Find the length of that single array once combined

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: 
// Use built-in methods to reverse the variable currentCohort
// Separate the string so that it turns into an array
// Use a built-in method to reverse the values of that array
// Use another biult-in method to combine to values of the array

const currentCohort = "Alpha 2023"
// Expected output: "3202 ahplA"

console.log(currentCohort.split("").reverse().join(""))

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// Using the test variables provided, console log myNumbers and find the last index of each test variable.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

console.log(myNumbers.lastIndexOf(givenValue2))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// Use a built-in method to sort the array
// Use another built-in method to reverse the array so that it shows from largest to smallest, rather than from smallest to largest.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

console.log(sanDiegoWinterTemperatures.sort().reverse())
