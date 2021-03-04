const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },

        snippet: {
            type: String,
            required: true,
            unique: true,
        },

        body: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

// creating model
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
