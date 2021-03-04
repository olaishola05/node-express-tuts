const fs = require("fs");
const path = require("path");

// streams allow us to use data before the data is fully ready
const filePath = path.join(__dirname, "/docs", "bigstreams.txt");
const wrPath = path.join(__dirname, "/docs", "newstreams.txt");

const readStream = fs.createReadStream(filePath, {
    encoding: "utf8",
});

const writeStream = fs.createWriteStream(wrPath);

// readStream.on("data", (chunk) => {
//     console.log("---- NEW CHUNK ----");
//     console.log(chunk);

//     writeStream.write("\nNEW CHUNK\n");
//     writeStream.write(chunk);
// });

// better way using piping

readStream.pipe(writeStream);
