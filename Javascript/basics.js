console.log("Starting JS");

// var name to start with a letter, $ or _

var a= 1;
var b= 3;

console.log(1 + 3);

var s = "some string";
console.log(typeof(s));

/*
    var vs let vs const
    -   var is global scoped while let and const are block scoped
*/

//////////////////////////////////////////  for in & for of

// for x in obj- for obj props
// for itr of array- for array and string



////////////////////////////////////////// Arrow function

/* syntax
    const func1 = (params) => {
        def
    }
*/



////////////////////////////////////////// strings

// indexing

console.log(s)
console.log(s[2])
console.log(s[90])   // out of index --- undefined

console.log(s.length)  // length

// template literal        `` && ${}
console.log(`This is ${s}`)


// slice
console.log(s.slice(1, 6))


// strings are immutable

console.log(s.replace("some", "other"))
console.log(s)        // value of string does not change



// common array func

// push, pop, shift, unshift, delete, concat


