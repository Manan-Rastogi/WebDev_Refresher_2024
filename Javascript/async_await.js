// async await helps to wait for data that will be obtained from an asyncrn function
// It avoids the use of callbacks unlike promises then catch approach

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(122);
    }, 2000);
  });
}

let data = getData();
console.log("async js in play here....");

data.then((v) => {
  // we are using a callback to wait for promised value
  console.log(v);
});

console.log("***********************************************************");

async function GetData() {
  // fetch API --> returns a promise
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");  // await will basically wait for promide to settle. settle- resolve or reject
  let data = await x.json(); // waiting for json conversion
  //   console.log(data);
  return data;
}

async function main() {
  // we need a async func to use await [as a beginner]
  console.log("async js in play here agsin....");

  let data = await GetData(); // waiting for async func to end
  console.log(data);
}

main();
