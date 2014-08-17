$(document).ready(function() {
    console.log("document ready");
    $.ajax({
        url: window.location.origin + "/data",
        method: "GET",
        data: {"metrics" : ["Pushups", "Photos Uploaded", "Pages Read", "Running Distance"]},
        success: function(data, status) {
            debugger;
            $metrics = $("#metrics");
            for (var metric in data) {
                $metrics.append("<li>" + metric + ": " + Number((data[metric]).toFixed(2)));
            }
        }
    });
});
