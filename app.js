const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const PORT = process.env.PORT || 5000;

//Middlewares
// app.use('/todos', () => {
//     console.log('hit this middleware')
// })

//Imported Routes
const todos = require('./routes/todos');

//Routes
app.get("/", (req, res) => {
  res.send("home page");
});

app.use('/todos', todos);

//Connect to DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected to mongoDB"))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
