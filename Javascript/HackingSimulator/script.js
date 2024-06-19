var msgs = [
  "Initializing Hacking",
  "Reading your Files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up",
];

// getting a random delay
const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 3 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

const addHackingContent = async (items) => {
  await randomDelay();
  let newDiv = document.createElement("div")
  newDiv.innerHTML = items
  document.querySelector(".container").append(newDiv)
}

async function main(){

  let t = setInterval(() => {
    let lastElement = document.querySelector(".container").lastElementChild;
    if(lastElement.innerHTML.endsWith("...")){
      lastElement.innerHTML = lastElement.innerHTML.slice(0, -3)
    }else{
      lastElement.innerHTML += "."
    }
  }, 500);

  for (const item of msgs) {
    await addHackingContent(item);
  }

  await randomDelay()
  clearInterval(t)
}

main();
