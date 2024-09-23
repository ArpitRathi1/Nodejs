const express = require("express");      // Importing

const app = express()                    // Initialise App

app.get("/", (req, res) => {
    return res.send("Hello from Home Page")
})

app.get("/about", (req, res) => {
    return res.send("Hello from About Page" + " hey " + req.query.name)
})

app.listen(8000, () => console.log("Server Started"))