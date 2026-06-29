import fs from "fs";

// 1
// fs.writeFile("data", "Hello from Node fs!", "utf8", err => {
//     console.log(err || "File was created successfully");
// })

// 2
// fs.readFile("data", "utf8", (err, data) => {
//     console.log(err || data);
// })

// 3
// console.log("Start");
// fs.readFile("data", "utf8", (err, data) => {
//     console.log(err || data);
// })
// console.log("End");

// 4
// fs.readFile("data", "utf8", (err, data) => {
//     if (err) return console.log("Could not read file\n", err);
//     console.log(data);
// });

// 5
// function readTextFile(filePath, callback) {
//     fs.readFile(filePath, "utf8", (err, data) => {
//         if (err) return callback(err);
//         callback(null, data);
//     });
// }

// readTextFile("data", (err, data) => {
//     console.log(err || data);
// })


// 6
// fs.appendFile("data", "This line was added later.\n", "utf8", err => {
//     if(err) return console.log(err);
//     fs.readFile("data", "utf8", (err, data) => {
//         console.log(err || data);
//     })
// })


// 7
// fs.writeFile("log.txt", "Log started\n", "utf8", err => {
//     if(err) return console.log(err);
//     fs.appendFile("log.txt", "First action completed\nSecond action completed\n", "utf8", err => {
//         if(err) return console.log(err);
//         fs.readFile("log.txt", "utf8", (err, data) => {
//             console.log(err || data);
//         })
//     })
// })


// 8
// fs.mkdir("./data/users", {recursive: true}, (err) => {})



// 9
fs.mkdir("data/users", {recursive: true}, () => {
    fs.writeFile("data/users/user1.txt", "Name: David\nAge: 25\n", "utf8", err => {
        if(err) console.log(err);
    })
})


// 10
// fs.readdir("data", "utf8", (err, data) => {
//     console.log(err || data);
// })


// 11
// fs.writeFile("data/step1.txt", "Step 1 completed\n", "utf8", err => {
//     if(err) return console.log(err);
//     fs.writeFile("data/step.txt", "Step 2 completed", "utf8", err => {
//         if(err) return console.log(err);
//         fs.writeFile("data/step3.txt", "Step 3 completed", "utf8", err => {
//             if(err) return console.log(err);
//             console.log("All steps completed");
//         })
//     })
// }) 


// 12
// fs.readFile("data/step1.txt", "utf8", (err, data1) => {
//     if(err) return console.log(err);
//     fs.readFile("data/step.txt", "utf8", (err, data2) => {
//         if(err) return console.log(err);
//         fs.readFile("data/step3.txt", "utf8", (err, data3) => {
//             if(err) return console.log(err);
//             console.log(data1, data2, data3);
//         })
//     })
// })


// 13
// fs.writeFile("data/report-title.txt", "Daily Report\n", "utf8", () => {
//     fs.writeFile("data/report-body.txt", "Everything is working\n", "utf8", () => {
//         fs.readFile("data/report-title.txt", "utf8", (err, data1) => {
//             fs.readFile("data/report-body.txt", "utf8", (arr, data2) => {
//                 fs.writeFile("data/final-report.txt", data1 + data2, "utf8", () => {})
//             })
//         })
//     })
// })


// 14
// fs.writeFile("data/original.txt", "Original file content", "utf8", () => {
//     fs.readFile("data/original.txt", "utf8", (err, data) => {
//         fs.writeFile("data/copy.txt", data, "utf8", () => {
//             fs.readFile("data/copy.txt", "utf8", (err, data) => {
//                 console.log(data)
//         })
//         });
//     })
// })


// fs.copyFile("data/original.txt", "copy.txt", () => {
//     fs.readFile("copy.txt", "utf8", (err, data) => {
//         console.log(data);
//     })
// })

// 15
