// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: 10 is correct because the .length determines the amount of characters in the string, including spaces

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o 
// b) Verify and explain: o was correct because we are trying to find out the 4th index of that string, and indexing starts at 5

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Ruby was correct because since the index we are looking for is 1, the 1st index of the languages array is Ruby, and indexing starting at 0. Indexing in an array finds the value of the data point in that location, rather than location of a character when it comes to strings.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: incorrect, the code logged an error because .toUpperCase() is not a built-in method for arrays

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: number is correct because we are first finding the length of the array, which is 4. typeof determines the type of data type that value is. 4 is a number so it the type of data type that returns is "number"
