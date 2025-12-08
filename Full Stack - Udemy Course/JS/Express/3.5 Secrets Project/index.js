//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
/*
Instructions: 
    1. Create a GET endpoint to show the form in index.html (localhost:3000/check)
    2. Create a POST endpoint to show the secrets.html if the password is written correctly (localhost:3000), may want to use the morgan package for validation process
*/

import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    const getPwd = req.body.password;
    const pwd = "test";

    if(getPwd===pwd){
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    };
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});