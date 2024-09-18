const http = require("http");
const fs = require("fs");
const url = require("url");

// const { error } = require("console");

// http.createServer -> To create a server
// This createServer function takes a callback function called requestLister
// This requestLister function has two argu. req and res object
// req object contains all the info about request
// res object is used to send response.

const myServer = http.createServer((req, res) => {
    // console.log("New Request Received");
    // console.log(req.headers)                    // req.headers is an object which contains all the info about client.
    if (req.url === "/favicon.ico") return res.end()
    const log = `${Date.now()} : ${req.method} ${req.url} new request received \n`
    const myUrl = url.parse(req.url, true)       // this true mean it will create an object for query parameters as well.
    console.log(myUrl)
    fs.appendFile("./log.txt", log, (error, data) => {
        switch(myUrl.pathname){
                case "/" : res.end("Home Page")
                    break
                case "/about" : 
                    const userName = myUrl.query.myName 
                    res.end(`About page : hi ${userName}`)
                    break
                case "/contact-us" : res.end("Contact-us page")
                    break
                case "/signup":
                    if (req.method === "GET") res.end("This is a signup form")
                    else if (req.method === "POST") {
                        // DB query
                        res.end("Success")
                    }
                default : res.end("404 page not found")
        }
        
    })
})

// To run this server we need a port.
myServer.listen(8000, () => console.log("server started"))