import fs from 'fs/promises'

// Inside a module can await directly.
let a = await fs.readFile("Files/workingWithFiles1.txt");         

await fs.appendFile("Files/workingWithFiles1.txt", `\nAppended data with await.`);

console.log(a.toString());

