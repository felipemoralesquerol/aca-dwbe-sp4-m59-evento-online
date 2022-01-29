const express = require("express");
let router = express.Router();

router.get("/", function (req, res) {
  res.send({ programa: "Auth Basic Google OAuth2" });
});

module.exports = router;
