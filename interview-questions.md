# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:

Researched answer:

1. What is git? What is the difference between git and Github?

Your answer: git is where you can work on code, GitHub is a platform where you can store and showcase your code

Researched answer: git is a system that tracks any changes you make to your files as you code. In class we use Terminal to check the git status on the files we worked on before pushing it to GitHub and to see what version we're working on. GitHub is a platform where code is stored. GitHub is useful for sharing code amongst developers so that when they collaborate, they are collaborating on one code source.

2. Which JavaScript operators will return a Boolean value?

Your answer: conditionals, if/else statements

Researched answer: The operators that will return a Boolean value are equality (either loose == or strict ===), relational operators (less than <, less than or equal to <=, greater than >, greater than or equal to >=), and logical (a statement AND &&, OR ||, BANG !)

3. What is an index? What is the difference between index and value?

Your answer: an index is the location of a value with the count starting at 0. A value is what the actual data is.
EX) "HELLO" - the value is HELLO and the value has indexes 0 through 4 

Researched answer: An index is the placement location of a character in a value. Index starts the count at 0 for the first placement and so on. For arrays, the index is the placement location of each item in the array, rather than characters. A value is what that sits at that particular index.
EX) [1, 543, 754, 764, 24] - the values are what actually sits in this array, separated by commas. The index is the location of each item. In this case, there are indexes for 0 through 4. 

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: Strings are a compilation of characters and arrays are a data set of values (could be any of the primitive data types). They are different because strings only include character values, while arrays could include any of the primitive data types such as numbers, Boolean, strings, etc. They are similar in the case that they both have a length property and you can find their indexes

Researched answer: Strings are a compilation of characters wrap in quotation marks (could be single or double quotes). They can contain as many characters and any type of characters needed. Arrays are a set of data, called elements, stored in an ordered list grouped together. Arrays can contain any type of data. The difference between strings and arrays is that strings has one value between the quoation marks while arrays can have multiple elements in the set which are separated by commas. 
Though they are different, strings and arrays have some similarities. They are both zero indexed meaning the values are numbered starting at 0 and going up by increments of 1. They both have a length property, you can concatenate multiple strings/arrays so that it becomes one, and they both have their own type of built-in methods. 

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: The two roles of pair programming are the driver and the navigator. The driver is the one who shares their screen and does the coding, while the navigator is the one who tells them what code to write. Both can be researching or looking at notes but the main idea is that only one person is coding while the other tells them what to code. In pair programming, it's important to switch drivers and navigators so that each person gets practice with each role. 

Researched answer: The roles of pair programming are either being the driver or the navigator. The driver is the person who is typing the code and sharing their screen, while taking instructions from the navigator of what to write. The navigator is the person who gives the instructions of what code to write to the driver and paying attention to detail. Pair programming requires constant communication so that both partners are on the same page. It's important to switch drivers and navigators so that each person gets practice with each role. Pair programming helps with problem-solving because both partners are thinking through the issues and talking it through to come up with the solution together. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: a built-in method that takes a function as an argument, usually operated on arrays. The function will perform for each item in the arrray. Two higher-order functions are .map() and .filter()

2. Jest: a framework used to test code to make sure the code works. It is made up of files that contain code functionality that allows us the ability to run tests. Jest tests are made up of a describe statement, an it statement, at least one expect statement and a matcher.

3. Objects: a data type that has a set of key:value pairs stored in curly braces. They can contain information, actions, and functions. 

4. Method: a method is an object with a behavior. Since objects can contain functions, a method is when a function belongs to an object. 

5. Classes: templates for objects; a type of function that contains data and behavior. Like functions, you can reuse classes and they are also customizeable. The Javascript keywords used to create and access information within a class are constructor, this, and new. Class names are similar to camelCase but the first word is also capitalized, called PascalCased.
