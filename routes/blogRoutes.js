const express = require("express");
const blogController = require("../controller/blogController");
const router = express.Router();

// blog route
router.get("/", blogController.blog_index);

// Post requests
router.post("/", blogController.blog_create_post);

router.get("/create", blogController.blog_create_get);

router.get("/:id", blogController.blog_details);

router.delete("/:id", blogController.blog_delete);

module.exports = router;
