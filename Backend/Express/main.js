import express from "express";
const app = express();
const port = 3000;

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

////////////////////////////////// Query /////////////////////////////////////////
// ?id=12&user=culprit
app.get("/info", (req, res)=>{
   
    res.send(`${req.query["id"]}`);
})

app.listen(port, () => {
  console.log(`Our app listening on port ${port}`);
});
