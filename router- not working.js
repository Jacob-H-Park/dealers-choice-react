// as soon as I try to use this router module, brower gives an error stating
// basses.map (in index.html) is not a function. I do not know how to address the errors atm.

const { Bass, db } = require("./db.js");
const router = require("express").Router();
const path = require("path");

router.get("/", async (req, res, next) => {
  try {
    res.send(await Bass.findAll());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.send(await Bass.findByPk(req.params.id * 1));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
