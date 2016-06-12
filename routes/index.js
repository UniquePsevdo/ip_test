var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/voting', function(req, res) {
    res.render('voting');
});

router.get('/approve', function(req, res) {
    res.render('approve');
});

router.get('/last', function(req, res) {
    res.render('last');
});

module.exports = router;
