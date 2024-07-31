import express from "express";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from 'path';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'views')));

app.set("view engine", "ejs");

app.get("/", (_req, res) => {
  let primary = "Primary";
  let success = "Success";
  let neutral = "Neutral";
  let warning = "Warning";
  let danger = "Danger";

  let arr = ["Mittens", "This little kitten is as cute as he is playful. Bring him home today!"]

  res.render("index", {
    primary: primary,
    success: success,
    neutral: neutral,
    warning: warning,
    danger: danger,
    arr, 
  });
});

app.listen(port, () => {
  console.log(`Our app listening on port ${port}`);
});
