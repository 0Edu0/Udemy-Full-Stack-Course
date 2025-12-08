import express from "express";


const app = express();
const port = 3000;
var today = new Date();
var day = today.getDay();

app.get("/", (req, res) => {
    if(day===0 || day === 6){
        res.render("index.ejs", {
            dayType: "a weekend",
            advice: "it's time to have fun",
        });
    } else {
        res.render("index.ejs", {
            dayType: "a weekday",
            advice: "it's time to work hard",
        });
    };
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});