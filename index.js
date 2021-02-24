const express = require("express");
const blogs = require("./assets/blogs");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

// middleware
app.use(morgan("dev"));
// app.use((req, res, next) => {
//     console.log("new request made");
//     console.log("host: ", req.hostname);
//     console.log("path: ", req.path);
//     console.log("method: ", req.method);

//     next();
// });

// app.use((req, res, next) => {
//     console.log("in the next middleware");

//     next();
// });

// middleware for static files
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About Us" });
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create New Blog" });
});

// 404 page, it must be at the bottom of the route
app.use((req, res) => {
    res.status(404).render("404", { title: "Page not found" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
