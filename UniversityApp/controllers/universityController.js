var express = require("express");

var router = express.Router();
var university = require("../models/universities.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/universities");
});

router.get("/universities", function(req, res) {
  // express callback response by calling university.selectAlluniversity
  university.all(function(universityData) {
    // wrapper for orm.js that using MySQL query callback will return university_data, render to index with handlebar
    res.render("index", { university_data: universityData });
  });
});

// post route -> back to index
router.post("/universities/create", function(req, res) {
  // takes the request object using it as input for university.adduniversity
  university.create(req.body.university_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/universities/:id", function(req, res) {
  university.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
