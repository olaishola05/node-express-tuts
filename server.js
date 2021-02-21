const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader("Content-Type", "text/html");

    let path = "./views/";
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;

        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;

        // for redirecting
        case "/about-me":
            res.statusCode = 301;
            res.setHeader("location", "/about");
            res.end();
            break;

        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, "localhost", () => {
    console.log("listening for request on port", PORT);
});
