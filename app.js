const express = require("express");
const app = express();

// middleware -> response send
app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if(token === "giveaccess") {
        next();
    }
    res.send("access denied!")
})

app.get("/api", (req , res) => {
    res.send("Data");
});

app.get("/random", (req, res) => {
    res.send("HI i am a random page");
});

app.listen(8080, () => {
    console.log("sever is listening to port 8080");
});