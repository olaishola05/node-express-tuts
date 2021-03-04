app.get("/add-blog", (req, res) => {
    // creating an instance of Blog
    const blog = new Blog({
        title: "Mongoose tutorial",
        snippet: "dairy of a whimper",
        body: "more about web diary",
    });
    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
});

// get all blogs
app.get("/all-blogs", (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

// single blog
app.get("/single-blog", (req, res) => {
    Blog.findById("60397897ed12f443c4bdbe40")
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});
