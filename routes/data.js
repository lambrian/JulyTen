var loggr = new (require('loggr'))();

exports.get = function(req, res) {
    var metrics = {};

    for (var i = 0; i < req.query.daily.length; i++) {
        var name = req.query.daily[i];
        metrics[name] = loggr.getToday({name: name});
    }

    for (var i = 0; i < req.query.ytd.length; i++) {
        var name = req.query.ytd[i];
        metrics[name] = loggr.getYTD({name: name});
    }

    res.send(metrics);
};
