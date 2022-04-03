//COLLECTS THE PACKAGED API ENDPOINTS AND PREFIXES THEM WITH THE PATH /API
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//UPDATED MESSAGE TO STANDARD 404 ERROR
router.use((req, res) => {
  res.status(404).end();
  /*
  res.send("<h1>Wrong Route!</h1>")
  */
});

module.exports = router;