const fs = require("fs");
const path = require("path");

// reading files
// fs.readFile(
//     path.join(__dirname, "/docs", "hello.txt"),
//     "utf8",
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);

//         // append instead of write
//         fs.appendFile(
//             path.join(__dirname, "/docs", "hello.txt"),
//             " Hope you are enjoying node tuts",
//             (err, data) => {
//                 if (err) throw err;
//                 console.log("file updated...");
//             }
//         );
//     }
// );

// creating directory
// to check if the directory is in existed you check by using fs.exsitsSync
if (!fs.existsSync("./assets")) {
    fs.mkdir(path.join(__dirname, "./assets"), {}, (err) => {
        if (err) throw err;
        console.log("Folder created...");
    });
} else {
    fs.rmdir("./assets", (err) => {
        if (err) throw err;
        console.log("folder deleted");
    });
}

// write replaces everything inside the file
// fs.writeFile(
//     path.join(__dirname, "/docs", "hello.txt"),
//     "Hope you are enjoying node tuts",
//     (err) => {
//         if (err) throw err;
//         console.log("file written to...");
//     }
// );

// delete files
if (
    fs.existsSync(path.join(__dirname, "/docs", "deleteme.txt"))
) {
    fs.unlink(
        path.join(__dirname, "/docs", "deleteme.txt"),
        (err) => {
            if (err) throw err;
            console.log("file deleted");
        }
    );
}
