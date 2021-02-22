const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname });
});

// redirecting with express
app.get("/about-me", (req, res) => {
    res.redirect("/about");
});

// 404 page, it must be at the bottom of the route
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", {
        root: __dirname,
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
