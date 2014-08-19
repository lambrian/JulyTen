var loggr = new (require('loggr'))();

exports.get = function(req, res) {
    var metrics = {};

    var currentDay = new Date().setHours(0,0,0,0);
    for (var i = 0; i < req.query.daily.length; i++) {
        var name = req.query.daily[i];
        metrics[name] = loggr.getTotalInRange({name: name}, currentDay, new Date());
    }

    var currentYear = new Date(new Date().getFullYear(), 0,1);
    for (var i = 0; i < req.query.ytd.length; i++) {
        var name = req.query.ytd[i];
        metrics[name] = loggr.getTotalInRange({name: name}, currentYear, new Date());
    }

    res.send(metrics);
};
