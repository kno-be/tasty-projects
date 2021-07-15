const express = require('express');
const router = express.Router();



router.get('/projects', (req, res) => {
    res.render("port-one/index.ejs")
});    

module.exports = router;