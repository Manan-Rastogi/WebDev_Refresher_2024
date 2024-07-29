// https://expressjs.com/en/guide/routing.html

import express from "express";
const app = express();

app.get("/batsmen", (req, res)=>{
    res.send("Let's talk about batsmen in Cricket.")
})

app.get("/bowler", (req, res)=>{
    res.send("Let's talk about bowler in Cricket.")
})

app.get("/wicketKeeper", (req, res)=>{
    res.send("Let's talk about wicketKeeper in Cricket.")
})

app.get("/fielder", (req, res)=>{
    res.send("Let's talk about fielder in Cricket.")
})


export default app;