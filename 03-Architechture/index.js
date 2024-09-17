const fs = require("fs");
const os = require("os");

// console.log(os.cpus().length)

// Blocking or Sync operation
console.log("1")
const result = fs.readFileSync("./contacts.txt","utf-8")
console.log(result)
console.log("2")

// Output : 
// 1
// Arpit : +91-9806305527
// 2

// Non-Blocking or Async operation
console.log("1");
fs.readFile("./contacts.txt", "utf-8", (err, result)=>{
    console.log(result)
})
console.log("2");

// Output : 
// 1
// 2
// Arpit : +91-9806305527