var msgs = [
  "Initializing Hacking",
  "Reading your Files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up",
];

async function setHackingContent() {
  let x = 0 + Math.random() * (4 - 0);
  return msgs[Math.ceil(x)];
}

async function main() {
  setInterval(async () => {
    let msg = await setHackingContent();

    document.querySelector("#command").innerHTML += `<br> <p> ${msg} </p><br>`;
  }, 3000);

  setInterval(() => {
    document.querySelector("#command").textContent += ".";
  }, 1000);

}

main();
