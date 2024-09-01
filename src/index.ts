import express, { Express, Request, Response } from "express";
import gen from "./calendar";

const marked = require("marked");
const path = require("node:path");
const fs = require("node:fs");

const app = express();

app.use(express.static(path.join(__dirname, "static")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* loader? */
function load_md(file: String) {
  let data = fs.readFileSync(path.join(__dirname, "pages/", file), "utf8");
  return marked.parse(data);
}

app.get("/", (req, res) => {
  res.render("index", {
    data: load_md("index.md"),
  });
});
/* ---- */

app.get("/calendar", (req, res) => {
  res.render("calendar", {
    data: gen(new Date()),
  });
});

let server = app.listen(7777, () => {
  console.log("Started express server on", server.address());
});
