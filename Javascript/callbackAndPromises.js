// callback func is a function passed into another function


/**
 * @param {string} data - The string to be converted to uppercase.
 */
function upperPrint(data){
    console.log(data.toUpperCase())    
}

/**
 * Loads a script and executes a callback function.
 * @param {string} src - The source URL of the script.
 * @param {function} callback - The callback function to execute after loading the script.
 */
const loadScript = (src, callback) =>{
    console.log(src)

    callback(src)
}

loadScript("Hi I am a hacker.", upperPrint)


///////////////////////// Callback Hell - Pyramid od Doom - callbacl in a claaback in a claasback -- difficult to manage

// Soln to these callbacks is promises

let prom1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('Yes Promise Done');
        resolve("promise resolved!")                             // promise resolved
    }, 1000)

    // reject promise based on a random number
    let randNum = Math.random()
    if(randNum < 0.5){
        reject("promise rejected!")
    }
})

// run after promise is resolved/ rejected
prom1.then((a) => {           // resolved
    console.log(a);
}).catch((err) => {             // rejected or general failure/panic in your pathetic code
    console.log(err);
})


// Promise.all()    // takes an arr, wait for all promises to resolve 
// .allSetteled()   // resolve or reject
//  .race()         // wait for any 1 to finish(resolve/reject). One to finish first becomes outcome
//  .any()          // race w/o errors. If all fails it returns an aggregate error
//  .resolve()      // makes a resolve promise with the given value
//  .reject()       // -- ---- reject -----------------------------