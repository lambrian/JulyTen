var Loggr = require('./loggr');
var Test = require('../controllers/test');
console.log("TEST TESTTEST: " + Test);

var Index = function(req, res) {
    res.sendfile('/public/index.html');
};

exports.index = Index;
