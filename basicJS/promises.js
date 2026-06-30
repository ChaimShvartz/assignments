// import fs from "fs";

// 1
// function writeFileAsPromise(filePath, content) {
//     return new Promise((res, rej) => {
//         fs.writeFile(filePath, content, "utf8", (err) => {
//             if (err) rej(err);
//             res("access");
//         });
//     });
// }

// writeFileAsPromise("test.txt", "")
//     .then(msg => msg.toUpperCase())
//     .then(console.log)
//     .catch(console.log)

// 2
// function readFileAsPromise(filePath) {
//     return new Promise((res, rej) => {
//         fs.readFile(filePath, "utf8", (err, data) => {
//             if (err) rej(err);
//             res(data);
//         });
//     });
// }

// readFileAsPromise("tesat.txt")
//     .then(console.log)
//     .catch(console.log)

// 3
// function readFileAndCount(filePath) {
//     return new Promise((res, rej) => {
//         fs.readFile(filePath, "utf8", (err, data) => {
//             if (err) rej(err);
//             res(data?.length);
//         });
//     });
// }

// readFileAndCount("testa.txt").then(console.log).catch(console.log);

// 4
// function writeFileAsPromise(filePath, content) {
//     return new Promise((res, rej) => {
//         fs.writeFile(filePath, content, "utf8", (err) => {
//             if (err) rej(err);
//             res();
//         })
//     });
// }
// writeFileAsPromise("test.txt", "hiiiii\n")
//     .then(() => console.log("Step 1 done"))
//     .then(() => writeFileAsPromise("test2.txt", "wowwwwwwww"))
//     .then(() => console.log("Step 2 done"))
//     .catch(console.error);

// 5
// function readFileAsPromise(filePath) {
//     return new Promise((res, rej) => {
//         fs.readFile(filePath, "utf8", (err, data) => {
//             if (err) rej(err);
//             else res(data);
//         });
//     });
// }

// Promise.all([readFileAsPromise("test1.txt"), readFileAsPromise("test2.txt"), readFileAsPromise("test3.txt")])
//     .then(console.log)    
//     .catch(console.error);
    

// 6
// function writeFileAsPromise(filePath, content) {
//     return new Promise((res, rej) => {
//         fs.writeFile(filePath, content, "utf8", (err) => {
//             if (err) rej(err);
//             else res();
//         });
//     });
// }

// function readFileAsPromise(filePath) {
//     return new Promise((res, rej) => {
//         fs.readFile(filePath, "utf8", (err, data) => {
//             if (err) rej(err);
//             else res(data);
//         });
//     });
// }

// Promise.all([writeFileAsPromise(("test1.txt"), "1\n"), writeFileAsPromise("test2.txt", "2\n")])
//     .then(() => Promise.all([readFileAsPromise("test1.txt"), readFileAsPromise("test2.txt")]))
//     .then((data) => writeFileAsPromise("result.txt", data.join('')))
//     .then(() => readFileAsPromise("result.txt"))
//     .then(console.log)


import fs from "fs/promises";

// 7
// fs.readFile("test1.txt", "utf8")
//     .then(console.log)
//     .catch(console.log);

// 8
// Promise.all([fs.writeFile("test1.txt", "111\n", "utf8"), fs.writeFile("test2.txt", "222\n", "utf8")])
//     .then(() => Promise.all([fs.readFile("test1.txt", "utf8"), fs.readFile("test2.txt", "utf8")]))
//     .then((data) => fs.writeFile("result.txt", data.join(''), "utf8"))
//     .then(() => fs.readFile("result.txt", "utf8"))
//     .then(console.log)
//     .catch(console.error);