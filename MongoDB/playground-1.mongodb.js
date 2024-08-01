/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sigma');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "Instructor": "Telusko",
    "Price": 3500
  },
  {
    "name": "C++",
    "Instructor": "FreeCodeCamp",
    "Price": 3000
  },
  {
    "name": "Ruby",
    "Instructor": "The Net Ninja",
    "Price": 2800
  },
  {
    "name": "Go",
    "Instructor": "Tech With Tim",
    "Price": 3200
  },
  {
    "name": "Swift",
    "Instructor": "CodeWithChris",
    "Price": 3700
  },
  {
    "name": "Kotlin",
    "Instructor": "Stefan Mischook",
    "Price": 3300
  },
  {
    "name": "PHP",
    "Instructor": "The Net Ninja",
    "Price": 2900
  },
  {
    "name": "R",
    "Instructor": "Corey Schafer",
    "Price": 3100
  },
  {
    "name": "Creative Writing",
    "Instructor": "Brandon Sanderson",
    "Price": 1500
  },
  {
    "name": "Photography",
    "Instructor": "Peter McKinnon",
    "Price": 2000
  },
  {
    "name": "Cooking",
    "Instructor": "Gordon Ramsay",
    "Price": 2500
  },
  {
    "name": "Graphic Design",
    "Instructor": "Aaron Draplin",
    "Price": 3000
  },
  {
    "name": "Music Production",
    "Instructor": "Andrew Huang",
    "Price": 2800
  }
]);


// Print a message to the output window.
console.log(`Data Inserted`);


