const fs = require("fs");

// writeFile -> creates a new file and write contant, overwrite.
// sync -> Takes two argu. Path and content
// fs.writeFileSync("./test.txt", "Hello Arpit ")

// async -> Takes 3 argu. Path, content and callback to handle error
// fs.writeFile("./test.txt", "Hello Arpit async", (err) => {})


// readFile -> To read a file.
// sync -> Takes two argu. Path and encoding (utf-8)
// It returns result which you can store it in a variable
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result)

// async -> Take Two argu. Path, encoding (utf-8) and a callback function to handle error or return result.
// fs.readFile("./contacts.txt", "utf-8", (error, result) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log(result)
//     }
// })


// appendFile -> To append content.
// sync...
// fs.appendFileSync("./test.txt", `${Date.now()} Hey Arpit\n`);

// async...
// fs.appendFile("./test.txt", `${Date.now()} Hey Arpit Async`, (err) => {})

// cp -> To copy a file
// sync -> Takes two argu. path and new copyed file path and name
// fs.cpSync("./test.txt", "./copy.txt")

// async -> Takes three argu. path, new copyed file path and name and callback to handle error
// fs.cp("./test.txt", "./copy.txt", (err) => {})

//  unlink -> To delete file
// sync -> Take one argu. path of file tobe deleted.
// fs.unlinkSync("./copy.txt")

// async -> Take to argu. path of file tobe deleted and callback to handle error
// fs.unlink("./copy.txt", (err) => {})
