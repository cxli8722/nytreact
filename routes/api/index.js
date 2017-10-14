const router = require("express").Router();
const bookRoutes = require("./books");
const articleRoutes = require("./article");


// Book routes
router.use("/books", bookRoutes);
router.use("/article", bookRoutes);


module.exports = router;
