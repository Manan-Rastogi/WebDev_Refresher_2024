use("crudDB");

console.log("Current DB - ", db);

// db.createCollection("courses");

// db.getCollection("courses").insertMany([
//     {
//       "name": "Java",
//       "Instructor": "Telusko",
//       "Price": 3500
//     },
//     {
//       "name": "C++",
//       "Instructor": "FreeCodeCamp",
//       "Price": 3000
//     },
//     {
//       "name": "Ruby",
//       "Instructor": "The Net Ninja",
//       "Price": 2800
//     },
//     {
//       "name": "Go",
//       "Instructor": "Tech With Tim",
//       "Price": 3200
//     },
//     {
//       "name": "Swift",
//       "Instructor": "CodeWithChris",
//       "Price": 3700
//     },
//     {
//       "name": "Kotlin",
//       "Instructor": "Stefan Mischook",
//       "Price": 3300
//     },
//     {
//       "name": "PHP",
//       "Instructor": "The Net Ninja",
//       "Price": 2900
//     },
//     {
//       "name": "R",
//       "Instructor": "Corey Schafer",
//       "Price": 3100
//     },
//     {
//       "name": "Creative Writing",
//       "Instructor": "Brandon Sanderson",
//       "Price": 1500
//     },
//     {
//       "name": "Photography",
//       "Instructor": "Peter McKinnon",
//       "Price": 2000
//     },
//     {
//       "name": "Cooking",
//       "Instructor": "Gordon Ramsay",
//       "Price": 2500
//     },
//     {
//       "name": "Graphic Design",
//       "Instructor": "Aaron Draplin",
//       "Price": 3000
//     },
//     {
//       "name": "Music Production",
//       "Instructor": "Andrew Huang",
//       "Price": 2800
//     }
//   ]);

//////////////////////////////// Read ////////////////////////
let b = db.courses.findOne({ Price: 3300 });
console.log(b);

let c = db.courses.find({ Price: 3700 });
console.log("c - ", c);

//////////////////////////////// Update ///////////////////////
db.courses.updateOne({ name: "PHP" }, { $set: { name: "PHP 11" } });


//////////////////////////// Delete //////////////////////////
db.courses.deleteOne({name:"Ruby"})