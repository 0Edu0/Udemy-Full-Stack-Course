//Body parser to post an inline HTML with the band name generated
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const street = req.body.street;
  const pet = req.body.pet;

  res.send(`<h1>Your band name is: </h1> <h2> ${street}${pet}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
