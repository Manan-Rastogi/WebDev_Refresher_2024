let a = "2"
let b = "5"

console.log('a + b = ', a + b);  // append string

a = parseInt(a)
b = parseInt(b)

console.log('a + b = ', a + b);  

a = "Ram"
b = "Shyam"

a = parseInt(a)                   // NaN
b = parseInt(b)                   // NaN

console.log('a + b = ', a + b);   // NaN


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors


// throw error 

// uncomment this 
// if(isNaN(a) || isNaN(b)){
//     throw(TypeError("either a or b is NaN. So addition oprn can not be performed."))
// }



// handle errors -- try catch --- it works synchronously

try {
    x = "3" * z; // This will cause a ReferenceError because 'z' is not defined
    console.log('x = ', x);
} catch (error) {
    console.log('Error Occured - ', error); // This will log the initial error

    // Throwing a custom error
    throw new Error("Something went wrong...");
} finally {
    // This block runs regardless of whether an error was thrown or not
    console.log("DB connection closed!!");
}


// finally is majorly used in functions as we generally have return in try and catch. Even with these returns the finally block will be executed. 

