var loggr = new (require('loggr'))();

exports.get = function(req, res) {
    var metrics = {};
    for (var i = 0; i < req.query.metrics.length; i++) {
        var name = req.query.metrics[i];
        metrics[name] = loggr.getToday({name: name});
    }
    res.send(metrics);
};
