const express = require("express");
const blogs = require("./assets/blogs");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { render } = require("ejs");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

const dbURI =
    "mongodb+srv://netman_5:test12345@nodetuts.g8b9b.mongodb.net/Nodetuts?retryWrites=true&w=majority";
mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result) =>
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        })
    )
    .catch((err) => console.log(err));

app.set("view engine", "ejs");

// middleware
app.use(morgan("dev"));
// middleware for static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //for accepting form data

app.get("/", (req, res) => {
    // res.render("index", { title: "Home", blogs });
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About Us" });
});

// blog routes
app.use("/blogs", blogRoutes);

// 404 page, it must be at the bottom of the route
app.use((req, res) => {
    res.status(404).render("404", { title: "Page not found" });
});
