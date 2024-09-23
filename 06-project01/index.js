const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs")

const app = express();
const PORT = 8001;

// middle-ware
app.use(express.urlencoded({ extended : false}))    // This middle-ware will put form data in req.body

app.use((req, res, next) => {                       // next is the referance of next middleware or function in the stake
    console.log("I am in middle ware 1")
    req.myUserName = "Arpit"                        // We can make changes in req and res object   
    // return res.json({msg : "I am in middle ware 1"})
    next()                                          // To let req go to next function
})

app.use((req, res, next) => {
    console.log("I am in middle ware 2", req.myUserName);
    fs.appendFile("./log.txt", `${Date.now()} : ${req.method} : ${req.path} : ${req.ip} \n`, (err, data) => {
        next()
    })
})

// Routes
app.get("/users", (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
        </ul>
    `
    return res.send(html)
})

app.get("/api/users", (req, res) => {
    console.log("I am in get route", req.myUserName)
    res.setHeader("X-myName", "Arpit")                 // Custom Header -> Always add X in custome header
    return res.json(users)
})

// Dynamic Path Parameter  
app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (!user) return res.status(404).json({msg : "User not found"})
        // console.log(user)
        return res.json(user)
    })
    .patch((req, res) => {
        // To be completed
        return res.json({status : "pending"})
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const newUser = users.filter((user) => user.id !== id);
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(newUser), (err, data) => {
            return res.json({status : "Deleted", id: id})
        })
    })

app.post("/api/users", (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || ! body.job_title) {
        return res.status(400).json({msg : "All fleids are required"})
    }
    // console.log(body)
    users.push({...body, id : users.length + 1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.status(201).json({status : "Success", id : users.length})           // It is a good practice to send 201 status code as response in post request
    })
})


app.listen(PORT, () => console.log(`Server Srated at port : ${PORT}`))