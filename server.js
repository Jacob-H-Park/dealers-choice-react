const { Bass, db } = require("./db.js");
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.listen(port, console.log(`listening on port ${port}`));

app.get("/api/basses", async (req, res, next) => {
  try {
    res.send(await Bass.findAll());
  } catch (err) {
    next(err);
  }
});

app.get("/api/basses/:id", async (req, res, next) => {
  try {
    res.send(await Bass.findByPk(req.params.id * 1));
  } catch (err) {
    next(err);
  }
});

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

//react post will be covered later.

//the axios post sends a payload via an ajax request, the express middleware parses that payload (which is sent in json format) and puts the result in req.body. -> axios.post
//will need to use app.use(express.json());

// app.post("/", async (req, res, next) => {
//   try {
//     const newItem = await Bass.create(req.body);
//     res.redirect("/");
//   } catch (err) {
//     next(err);
//   }
// });
