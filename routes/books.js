const express = require("express");
// const { append } = require("express/lib/response");
const { books } = require("../data/books.json");

const router = express.Router();

/**
 * Route: /books
 * Method: GET
 * Description: Get all the books
 * Access: Public
 * Parmanters: none
 */
 router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: books });
});


module.exports = router;