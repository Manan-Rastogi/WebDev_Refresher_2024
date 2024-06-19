// IIFE - Immediately Invoked Function Expression -- https://developer.mozilla.org/en-US/docs/Glossary/IIFE

async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

// let a = await sleep();
// let b = await sleep();

// These will return error as await can not be called w/o async. Sometime we may want to run func as soon as they are declared. So we use IIFE.

(async function main() {
  let a = await sleep();
  console.log("a =", a);

  let b = await sleep();
  console.log("b = ", b);
})();

// Destructuring
let [x, y] = [1, 5];

console.log(x);
console.log(y);

let anObj = {
  oa: 1,
  aob:"ignored",
  ob: 3,
};

let { oa, ob } = anObj;  // same name as key

console.log(oa, ob);


// rest - gather rest of the elements    &&     spread -- spread elements of a datastructure one by one 
let [a, b, ...rest] = [1, 4, 2, 5, 6, 7, 8];
console.log(rest);

function sum(a, b, c){
    return a+b+c
}

let arr = [1, 7, 8]

console.log(sum(...arr));
console.log(sum(arr[0], arr[1], arr[2]));

// HOISTING - google for interview               let and const are ignored by hoisting... works with var and functions only
