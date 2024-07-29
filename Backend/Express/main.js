import express from "express";
import cricInfo from './routes/cricInfo.js'
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  // It's a HANDLER [2nd argument]
  res.send("<h2>Hello World!</h2>");
});

app.get("/home", (req, res) => {
  // It's a HANDLER [2nd argument]
  res.send("<h2>Welcome Home...!</h2>");
});

app.get("/about", (req, res) => {
  // It's a HANDLER [2nd argument]
  res.send("<h2>About World!</h2>");
});


/////////////////////////////////// Request Params ///////////////////////////////////
// Using Variables  
app.get('/blog/:intro', (req, res) => {
    res.send(`<h1>Into to ${req.params.intro}</h1>`);
})

////////////////////////////////////// Query /////////////////////////////////////////
// ?id=12&user=culprit
app.get("/info", (req, res)=>{
   
    res.send(`${req.query["id"]}`);
})

//////////////////////////////// Serving Static Files ///////////////////////////////
app.use(express.static('public'))  // use is used to use middleware 👻
/*
 public folder is now static. We can directly access media/files in public folder 
 Eg- http://127.0.0.1:3000/flower.jpg
*/


//////////////////////////////// Chaining Requests ///////////////////////////////
// same endpoints can be chained 
app.get("/home", (req, res)=>{
    res.send('Welcome to Get request for Home Page.');
}).post("/home", (req, res)=>{
    res.send('Welcome to Post request for Home Page.');
})


///////////////////////////// Rendering File /////////////////////////////////
app.get("/welcome", (req, res)=>{
    res.sendFile("./templates/index.html", {root: __dirname})
})


////////////////////////////// Express Router /////////////////////////////////
app.use("/cricInfo", cricInfo)
// Eg: http://127.0.0.1:3000/cricInfo/fielder

app.listen(port, () => {
  console.log(`Our app listening on port ${port}`);
});
