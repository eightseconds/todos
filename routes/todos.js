const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// router.get('/', (req, res) => {
//   res.send('home page!')
// })

router.get("/", (req, res) => {
  res.send("todos page!");
});

router.post("/", (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    dueDate: req.body.dueDate
  });

  todo
    .save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({ message: err });
    });
});

module.exports = router;
