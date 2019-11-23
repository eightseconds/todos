const express = require('express');
const router = express.Router();


// router.get('/', (req, res) => {
//   res.send('home page!')
// })

router.get('/', (req, res) => {
  res.send('todos page!')
})


module.exports = router;